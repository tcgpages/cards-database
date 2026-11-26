import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "フカマル"
	},
	illustrator: "sui",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		443
	],
	hp: 50,
	types: [
		"Dragon"
	],
	stage: "Basic",
	description: {
		ja: "大口を 使った 攻撃は 威力 十分だが まだ うまく戦えず 自分も傷つく。"
	},
	attacks: [
		{
			name: {
				ja: "たいあたり"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		},
		{
			name: {
				ja: "かじる"
			},
			cost: [
				"Water",
				"Fighting"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "normal"
		},
		{
			type: "reverse",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "reverse"
		}
	]
}

export default card
