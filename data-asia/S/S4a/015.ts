import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "白蓬蓬",
		ja: "ワタシラガ"
	},

	illustrator: "Mina Nakai",

	category: "Pokemon",

	hp: 80,

	types: [
		"Grass"
	],

	description: {
		'zh-tw': "棉絮的種子營養豐富。牠會藉由風散播種子，讓草木和寶可夢變得活力十足。",
		ja: "頭の 綿毛で つくった 糸は 光沢があり とても 美しい。 ガラル地方の 名産品。"
	},

	evolveFrom: {
		ja: "ヒメンカ"
	},
	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "恩澤棉絮",
				ja: "めぐみのわたげ"
			},
			effect: {
				'zh-tw': "從自己的牌庫選擇最多3張【草】能量卡，以任意方式附於備戰寶可夢身上。並且重洗牌庫。",
				ja: "自分の山札から草エネルギーを3枚まで選び、ベンチポケモンに好きなようにつける。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "樹葉",
				ja: "このは"
			},
			damage: 30,
			cost: [
				"Grass"
			]
		}
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		830
	]
}

export default card
