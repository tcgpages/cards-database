import { afterEach, expect, test } from 'bun:test'
import { execFileSync } from 'node:child_process'
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { validateAsianChanges } from './validate-asian-changes'

const roots: string[] = []
afterEach(() => { for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true }) })

function fixture() {
	const root = mkdtempSync(path.join(tmpdir(), 'tcgdex-asian-types-'))
	roots.push(root)
	const git = (...args: string[]) => execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim()
	git('init', '-q')
	git('config', 'user.name', 'CI fixture')
	git('config', 'user.email', 'ci@example.invalid')
	mkdirSync(path.join(root, 'data-asia'))
	writeFileSync(path.join(root, 'tsconfig.asia.json'), JSON.stringify({ compilerOptions: { noEmit: true, skipLibCheck: true, types: [] }, include: ['data-asia'] }))
	writeFileSync(path.join(root, 'interfaces.d.ts'), 'export type CardName = string\n')
	writeFileSync(path.join(root, 'data-asia/legacy.ts'), 'export const value: number = "legacy error"\n')
	git('add', '.')
	git('commit', '-qm', 'test: baseline')
	return { root, git, base: git('rev-parse', 'HEAD') }
}

test('checks new Asian records without admitting unrelated legacy errors', () => {
	const { root, git, base } = fixture()
	writeFileSync(path.join(root, 'data-asia/new.ts'), 'export const value: number = 1\n')
	git('add', '.'); git('commit', '-qm', 'test: add valid record')
	expect(validateAsianChanges(base, root)).toBe(0)
})

test('rejects a renamed Asian record with invalid types', () => {
	const { root, git, base } = fixture()
	git('mv', 'data-asia/legacy.ts', 'data-asia/renamed.ts')
	git('commit', '-qm', 'test: rename invalid record')
	expect(validateAsianChanges(base, root)).toBe(1)
})

test('shared schema changes require the entire Asian catalog to typecheck', () => {
	const { root, git, base } = fixture()
	writeFileSync(path.join(root, 'interfaces.d.ts'), 'export type CardName = number\n')
	git('add', '.'); git('commit', '-qm', 'test: change schema')
	expect(validateAsianChanges(base, root)).toBe(1)
})

test('missing or malformed base cannot silently skip validation', () => {
	const { root } = fixture()
	expect(() => validateAsianChanges('missing', root)).toThrow()
	expect(() => validateAsianChanges('a'.repeat(40), root)).toThrow()
})

test('compiler implementation changes still validate just the affected Asian records', () => {
	const { root, git, base } = fixture()
	mkdirSync(path.join(root, 'server/compiler/utils'), { recursive: true })
	writeFileSync(path.join(root, 'server/compiler/utils/setUtil.ts'), 'export const format = () => 1\n')
	git('add', '.'); git('commit', '-qm', 'test: change compiler implementation')
	expect(validateAsianChanges(base, root)).toBe(0)

	const card = path.join(root, 'data-asia/new.ts')
	writeFileSync(card, 'export const value: number = 1\n')
	git('add', '.'); git('commit', '-qm', 'test: also add a valid card')
	expect(validateAsianChanges(base, root)).toBe(0)

	writeFileSync(card, 'export const value: number = "new error"\n')
	git('add', '.'); git('commit', '-qm', 'test: introduce a card type error')
	expect(validateAsianChanges(base, root)).toBe(1)
})

test('changing the Asian TypeScript configuration checks existing records', () => {
	const { root, git, base } = fixture()
	writeFileSync(path.join(root, 'tsconfig.asia.json'), JSON.stringify({
		compilerOptions: { strict: true, noEmit: true, skipLibCheck: true, types: [] },
		include: ['data-asia']
	}))
	git('add', '.'); git('commit', '-qm', 'test: change Asian compiler options')
	expect(validateAsianChanges(base, root)).toBe(1)
})

test('deleting the shared schema cannot skip the full catalog check', () => {
	const { root, git, base } = fixture()
	git('rm', 'interfaces.d.ts')
	git('commit', '-qm', 'test: remove the schema')
	expect(validateAsianChanges(base, root)).toBe(1)
})

test('first adoption of the Asian config checks new records without pulling in legacy errors', () => {
	const { root, git } = fixture()
	const config = git('show', 'HEAD:tsconfig.asia.json')
	git('rm', 'tsconfig.asia.json')
	git('commit', '-qm', 'test: baseline without the validator')
	const base = git('rev-parse', 'HEAD')

	writeFileSync(path.join(root, 'tsconfig.asia.json'), config)
	const card = path.join(root, 'data-asia/new.ts')
	writeFileSync(card, 'export const value: number = 1\n')
	git('add', '.'); git('commit', '-qm', 'test: introduce the changed-data validator and a record')
	expect(validateAsianChanges(base, root)).toBe(0)

	writeFileSync(card, 'export const value: number = "new error"\n')
	git('add', '.'); git('commit', '-qm', 'test: introduce an invalid record')
	expect(validateAsianChanges(base, root)).toBe(1)
})
