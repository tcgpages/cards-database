import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "フタチマル"
	},
	illustrator: "Mizue",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		502
	],
	hp: 80,
	types: [
		"Water"
	],
	stage: "Stage1",
	description: {
		ja: "身につけた ホタチさばきの 技は フタチマルに よって 違う。 ホタチの 手入れは 欠かさない。"
	},
	attacks: [
		{
			name: {
				ja: "アクアテール"
			},
			effect: {
				ja: "このポケモンについている水エネルギーの数ぶんコインを投げ、オモテの数×10ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "30+"
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 1,
	evolveFrom: {
		ja: "ミジュマル"
	},
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
