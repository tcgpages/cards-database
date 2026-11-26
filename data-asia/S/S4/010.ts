import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小火龍",
		ja: "ヒトカゲ"
	},

	illustrator: "MAHOU",

	category: "Pokemon",

	hp: 70,

	types: [
		"Fire"
	],

	description: {
		'zh-tw': "天生喜歡熱熱的東西。據說當牠被雨淋濕的時候，尾巴的末端會冒出煙來。",
		ja: "熱いものを 好む 性格。 雨に濡れると しっぽの 先から 煙が 出るという。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "呼喚",
				ja: "もってくる"
			},
			effect: {
				'zh-tw': "從自己的牌庫抽出1張卡。",
				ja: "自分の山札を1枚引く。"
			},
			cost: [
				"Fire"
			]
		},
		{
			name: {
				'zh-tw': "火焰",
				ja: "ほのお"
			},
			damage: 30,
			cost: [
				"Fire",
				"Fire"
			]
		}
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "Common",

	dexId: [
		4
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
