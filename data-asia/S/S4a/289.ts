import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ゾウドウ"
	},
	illustrator: "sowsow",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 100,
	types: [
		"Metal"
	],
	stage: "Basic",
	dexId: [
		878
	],
	description: {
		ja: "５トンの 荷物を もっても 平気な 力持ち ポケモン。 鼻を 使って 土を 掘る。"
	},
	attacks: [
		{
			name: {
				ja: "かいりき"
			},
			cost: [
				"Metal",
				"Colorless",
				"Colorless"
			],
			damage: 60
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
	retreat: 3,
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
