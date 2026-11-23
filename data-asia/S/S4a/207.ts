import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "レドームシ"
	},
	illustrator: "tetsuya koizumi",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: [
		"Grass"
	],
	evolveFrom: {
		ja: "サッチムシ"
	},
	stage: "Stage1",
	dexId: [
		825
	],
	description: {
		ja: "殻の 中で 成長中。 サイコパワーで 外の 様子を うかがい 進化に 備えている。"
	},
	attacks: [
		{
			name: {
				ja: "リフレクター"
			},
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-40」される。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "ぶつかる"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
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
