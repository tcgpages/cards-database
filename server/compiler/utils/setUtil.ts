import { variantsForLanguage } from './variantUtil'
import { objectKeys, objectMap } from '@dzeio/object-util'
import { Card, Set, SupportedLanguages } from '../../../interfaces'
import { SetResume, Set as SetSingle } from '../../../meta/definitions/api'
import { cardToCardSimple, getCards } from './cardUtil'
import { DB_PATH, fetchRemoteFile, getDataFolder, resolveText, setIsLegal, smartGlob } from './util'


const setCache = new Map<string, Set>()

async function loadSet(file: string): Promise<Set> {
	const cached = setCache.get(file)
	if (cached) return cached

	const set: Set = (await import(`../../${file}`)).default
	setCache.set(file, set)
	return set
}

export function isSetAvailable(set: Set, lang: SupportedLanguages): boolean {
	return !!resolveText(set.name, lang) && !!resolveText(set.serie.name, lang)
}

/**
 * Return the set
 * @param name the name of the set
 */
export async function getSet(name: string, serie = '*', lang: SupportedLanguages): Promise<Set> {
	const query = `${DB_PATH}/${getDataFolder(lang)}/${serie}/${name}.ts`
	const [file] = await smartGlob(query)
	if (!file) throw new Error(`No set matches ${query}`)
	return loadSet(file)
}

export async function getSets(serie = '*', lang: SupportedLanguages): Promise<Array<Set>> {
	const files = await smartGlob(`${DB_PATH}/${getDataFolder(lang)}/${serie}/*.ts`)
	const sets = (await Promise.all(files.map(loadSet)))
		// Filter sets
		.filter((set) => isSetAvailable(set, lang))
		// Sort sets by release date
		.sort((a, b) => a.releaseDate > b.releaseDate ? 1 : -1)
	return sets
}

export async function getSetPictures(set: Set, lang: SupportedLanguages): Promise<[string | undefined, string | undefined]> {
	try {
		const file = await fetchRemoteFile('https://assets.tcgdex.net/datas.json')
		const logoExists = file[lang]?.[set.serie.id]?.[set.id]?.logo ? `https://assets.tcgdex.net/${lang}/${set.serie.id}/${set.id}/logo` : undefined
		const symbolExists = file.univ?.[set.serie.id]?.[set.id]?.symbol ? `https://assets.tcgdex.net/univ/${set.serie.id}/${set.id}/symbol` : undefined
		return [
			logoExists,
			symbolExists
		]
	} catch {
		return [undefined, undefined]
	}
}

export async function setToSetSimple(set: Set, lang: SupportedLanguages): Promise<SetResume> {
	const cards = await getCards(lang, set)
	const pics = await getSetPictures(set, lang)
	return {
		cardCount: {
			official: set.cardCount.official,
			total: Math.max(set.cardCount.official, cards.length)
		},
		id: set.id,
		logo: pics[0],
		name: resolveText(set.name, lang),
		symbol: pics[1]
	}
}

function getVariantCountForType(variants: Card['variants'], type: 'normal' | 'reverse' | 'holo' | 'firstEdition'): number {
	if (!variants) {
		return 0;
	}

	if (!Array.isArray(variants)) {
		return variants[type] ? 1 : 0;
	}

	if (type === 'firstEdition') {
		return variants.reduce((count, variant) =>
			count + (variant.stamp?.some((stamp) => stamp === '1st-edition') ? 1 : 0), 0);
	}

	return variants.reduce((count, variant) => count + (variant.type === type ? 1 : 0), 0);
}


export async function setToSetSingle(set: Set, lang: SupportedLanguages): Promise<SetSingle> {
	const cards = await getCards(lang, set)
	const pics = await getSetPictures(set, lang)
	const variants = cards.map(([, card]) => variantsForLanguage(card.variants, lang))
	return {
		cardCount: {
			firstEd: variants.reduce((count, finishes) => count + getVariantCountForType(finishes, "firstEdition"), 0),
			holo: variants.reduce((count, finishes) => count + getVariantCountForType(finishes, "holo"), 0),
			normal: variants.reduce((count, finishes) => count + getVariantCountForType(finishes, "normal"), 0),
			official: set.cardCount.official,
			reverse: variants.reduce((count, finishes) => count + getVariantCountForType(finishes, "reverse"), 0),
			total: Math.max(set.cardCount.official, cards.length)
		},
		cards: await Promise.all(cards.map(([id, card]) => cardToCardSimple(id, card, lang))),
		id: set.id,
		legal: {
			expanded: setIsLegal('expanded', set),
			standard: setIsLegal('standard', set)
		},
		logo: pics[0],
		name: resolveText(set.name, lang),
		releaseDate: typeof set.releaseDate === 'object' ? set.releaseDate[lang] ?? set.releaseDate[objectKeys(set.releaseDate)[0]]! : set.releaseDate,
		serie: {
			id: set.serie.id,
			name: resolveText(set.serie.name, lang)
		},
		symbol: pics[1],
		tcgOnline: set.tcgOnline,
		abbreviation: (set.abbreviations?.official || resolveText(set.abbreviations, lang)) ? {
			official: set.abbreviations?.official,
			localized: resolveText(set.abbreviations, lang)
		} : undefined,
		boosters: set.boosters ? objectMap(set.boosters, (booster, id) => ({
			id: `boo_${set.id}-${id}`,
			name: resolveText(booster.name, lang),
			// images will be coming soon...
		})) : undefined,
		thirdParty: set.thirdParty
	}
}
