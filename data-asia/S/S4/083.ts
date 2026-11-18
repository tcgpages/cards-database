import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伊布",
		ja: "イーブイ"
	},

	illustrator: "Lee HyunJung",

	category: "Pokemon",

	hp: 70,

	types: [
		"Colorless"
	],

	description: {
		'zh-tw': "伊布擁有著能夠為了適應周遭的環境而改變身體構造的能力。",
		ja: "まわりの 環境に 合わせて 体の つくりを 変えていく 能力の 持ち主。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "咬",
				ja: "かじる"
			},
			damage: 10,
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "擺尾拍擊",
				ja: "しっぽではたく"
			},
			damage: 20,
			cost: [
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "Common",

	dexId: [
		133
	],

	variants: [
		{
			type: "normal",
			languages: [
				"ja"
			]
		}
	]
}

export default card
