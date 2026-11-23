import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "拉普拉斯V",
		ja: "ラプラスV"
	},

	illustrator: "Hasuno",

	category: "Pokemon",

	hp: 210,

	types: [
		"Water"
	],

	dexId: [
		131
	],
	stage: "Basic",

	suffix: "V",

	attacks: [
		{
			name: {
				'zh-tw': "迴流",
				ja: "ウェーブバック"
			},
			effect: {
				'zh-tw': "從自己的手牌選擇1張【水】能量卡，附於這隻寶可夢身上。然後，將這隻寶可夢與備戰寶可夢互換。",
				ja: "自分の手札から水エネルギーを1枚選び、このポケモンにつける。その後、このポケモンをベンチポケモンと入れ替える。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "大洋閉環",
				ja: "オーシャンループ"
			},
			effect: {
				'zh-tw': "選擇2個這隻寶可夢身上附加的【水】能量，放回手牌。",
				ja: "このポケモンについている水エネルギーを2個選び、手札にもどす。"
			},
			damage: 210,
			cost: [
				"Water",
				"Water",
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

	rarity: "Holo Rare V",

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
