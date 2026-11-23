import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "バイウールー"
	},
	illustrator: "Kouki Saitou",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: [
		"Colorless"
	],
	evolveFrom: {
		ja: "ウールー"
	},
	stage: "Stage1",
	dexId: [
		832
	],
	description: {
		ja: "立派に 伸びた ツノは 異性に アピールするために 生えている。 武器として 使うことはない。"
	},
	attacks: [
		{
			name: {
				ja: "コットンガード"
			},
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。"
			},
			cost: [
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "すてみタックル"
			},
			effect: {
				ja: "このポケモンにも30ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 120
		}
	],
	weaknesses: [
		{
			type: "Fighting",
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
