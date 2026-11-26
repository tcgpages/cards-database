import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ブラッキー"
	},
	rarity: "Promo",
	illustrator: "The Pokémon Company Art-team",
	category: "Pokemon",
	hp: 100,
	types: [
		"Darkness"
	],
	stage: "Stage1",
	dexId: [
		197
	],
	description: {
		ja: "月の 波動を 体に 浴びると 輪っか模様が ほのかに 輝き 不思議な 力に 目覚めるのだ。"
	},
	attacks: [
		{
			name: {
				ja: "シャドードレイン"
			},
			effect: {
				ja: "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "スラッシュダウン"
			},
			effect: {
				ja: "次の自分の番、このポケモンは「スラッシュダウン」を使えない。"
			},
			cost: [
				"Darkness",
				"Colorless",
				"Colorless"
			],
			damage: 80
		}
	],
	evolveFrom: {
		ja: "イーブイ"
	},
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		}
	],
	retreat: 2
}

export default card
