import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "騰蹴小將",
		ja: "ラビフット"
	},

	illustrator: "Mizue",

	category: "Pokemon",

	hp: 90,

	types: [
		"Fire"
	],

	description: {
		'zh-tw': "蓬鬆的體毛幫助牠增強了抵禦寒冷的能力，也使牠能夠使出溫度更高的火屬性招式。",
		ja: "手を 使わずに 木の 枝から 木の実を 摘み取り リフティング。 足技を 磨く 練習。"
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "蓄能焰襲",
				ja: "ニトロチャージ"
			},
			effect: {
				'zh-tw': "從自己的牌庫選擇1張【火】能量卡，附於這隻寶可夢身上。並且重洗牌庫。",
				ja: "自分の山札から炎エネルギーを1枚選び、このポケモンにつける。そして山札を切る。"
			},
			damage: 20,
			cost: [
				"Fire"
			]
		},
		{
			name: {
				'zh-tw': "增量踢",
				ja: "マグナムキック"
			},
			damage: 70,
			cost: [
				"Fire",
				"Fire",
				"Colorless"
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

	rarity: "None",

	dexId: [
		814
	]
}

export default card
