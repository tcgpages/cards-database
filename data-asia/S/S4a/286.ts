import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ニャイキング"
	},
	illustrator: "Ryuta Fuse",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 120,
	types: [
		"Metal"
	],
	evolveFrom: {
		ja: "ガラル ニャース"
	},
	stage: "Stage1",
	dexId: [
		863
	],
	description: {
		ja: "頭の 体毛が 硬質化して 鉄の ヘルメットのように なった。 とても 好戦的な 性質。"
	},
	abilities: [
		{
			name: {
				ja: "はがねのせいしん"
			},
			effect: {
				ja: "このポケモンがいるかぎり、自分の鋼ポケモンが使うワザの、相手のバトルポケモンへのダメージは「+20」される。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "メタルクロー"
			},
			cost: [
				"Metal",
				"Metal",
				"Colorless"
			],
			damage: 70
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		}
	],
	retreat: 2,
	regulationMark: "D",
	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
