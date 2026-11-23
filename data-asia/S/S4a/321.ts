import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "オーロンゲV"
	},
	illustrator: "PLANETA Mochizuki",
	rarity: "Shiny rare V",
	category: "Pokemon",
	hp: 220,
	types: [
		"Darkness"
	],
	dexId: [
		861
	],
	stage: "Basic",
	suffix: "V",
	attacks: [
		{
			name: {
				ja: "かみつく"
			},
			cost: [
				"Darkness"
			],
			damage: 40
		},
		{
			name: {
				ja: "スパイキーナックル"
			},
			effect: {
				ja: "このポケモンについている悪エネルギーを2個選び、手札にもどす。"
			},
			cost: [
				"Darkness",
				"Darkness",
				"Darkness"
			],
			damage: 200
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
