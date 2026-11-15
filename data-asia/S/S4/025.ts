import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "咬咬龜",
		ja: "カムカメ"
	},

	illustrator: "kirisAki",

	category: "Pokemon",

	hp: 80,

	types: [
		"Water"
	],

	description: {
		'zh-tw': "有著不管看到什麼都會咬上去的習性。這似乎是因為長門牙的時候會癢的緣故。",
		ja: "目の前の ものに すぐに 噛みつく 習性。 生えかけの 前歯が 痒いので 噛みついてしまうらしい。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "緊咬不放",
				ja: "くらいつく"
			},
			effect: {
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
			},
			damage: 40,
			cost: [
				"Water",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "Common",

	dexId: [
		833
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
