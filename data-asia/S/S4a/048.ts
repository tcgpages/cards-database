import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雪絨蛾",
		ja: "モスノウ"
	},

	illustrator: "kirisAki",

	category: "Pokemon",

	hp: 90,

	types: [
		"Water"
	],

	description: {
		'zh-tw': "翅膀的溫度是零下１８０度。當牠飛過山野時，帶有冷氣的鱗粉會像下雪般地飄落下來。",
		ja: "野山を 荒らすものには 容赦 しない。 冷たいはねで 飛びまわり 吹雪を 起こして 懲らしめる。"
	},

	evolveFrom: {
		ja: "ユキハミ"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "冰雪之舞",
				ja: "ひょうせつのまい"
			},
			effect: {
				'zh-tw': "在自己的回合時，可不限次數使用。從自己的手牌選擇1張【水】能量卡，附於備戰區的【水】寶可夢身上。",
				ja: "自分の番に何回でも使える。自分の手札から水エネルギーを1枚選び、ベンチの水ポケモンにつける。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "極光束",
				ja: "オーロラビーム"
			},
			damage: 30,
			cost: [
				"Water",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "holo", languages: ["ja"] }
	],

	dexId: [
		873
	]
}

export default card
