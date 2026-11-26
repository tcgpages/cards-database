import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "オタマロ"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		535
	],
	hp: 60,
	types: [
		"Water"
	],
	stage: "Basic",
	description: {
		ja: "ほほを 振動させて 人には 聞こえない 音波を 出す。 音波の リズムで 会話する。"
	},
	attacks: [
		{
			name: {
				ja: "しんどう"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		},
		{
			name: {
				ja: "マッドショット"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Grass",
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
