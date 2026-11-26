import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ミジュマル"
	},
	illustrator: "Midori Harada",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		501
	],
	hp: 60,
	types: [
		"Water"
	],
	stage: "Basic",
	description: {
		ja: "お腹の ホタチは ツメと 同じ 成分で できている。 お腹から 外して 小刀として 使う。"
	},
	attacks: [
		{
			name: {
				ja: "シェルブレード"
			},
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージを追加。"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: "20+"
		}
	],
	weaknesses: [
		{
			type: "Lightning",
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
