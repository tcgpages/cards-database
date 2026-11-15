import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル マッスグマ"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 100,
	types: [
		"Darkness"
	],
	stage: "Stage1",
	dexId: [
		264
	],
	description: {
		ja: "とても 好戦的な 性質。 自分より 格上の 相手にも 平気で 挑む むこうみず。"
	},
	attacks: [
		{
			name: {
				ja: "つじぎり"
			},
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。"
			},
			cost: [
				"Darkness"
			],
			damage: 20
		},
		{
			name: {
				ja: "ぶちかます"
			},
			cost: [
				"Darkness",
				"Colorless",
				"Colorless"
			],
			damage: 70
		}
	],
	weaknesses: [
		{
			type: "Grass",
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
