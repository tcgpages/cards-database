import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "暴噬龜",
		ja: "カジリガメ"
	},

	illustrator: "Taira Akitsu",

	category: "Pokemon",

	hp: 140,

	types: [
		"Water"
	],

	description: {
		'zh-tw': "性情凶暴的寶可夢。會用能咬斷鐵棍的顎部大口咬住獵物。",
		ja: "狂暴な 性質。 鉄棒を 噛み千切る ほどの 顎の 力で 獲物に ばくりと 噛みつく。"
	},

	evolveFrom: {
		ja: "カムカメ"
	},
	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "虎鉗波",
				ja: "まんりきウェーブ"
			},
			effect: {
				'zh-tw': "在這個回合，若從手牌使出了「露璃娜」，則將對手的戰鬥寶可夢【麻痺】。",
				ja: "この番、手札から「ルリナ」を出して使っていたなら、相手のバトルポケモンをマヒにする。"
			},
			damage: 80,
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "衝浪",
				ja: "なみのり"
			},
			damage: 140,
			cost: [
				"Water",
				"Water",
				"Colorless",
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

	retreat: 4,

	regulationMark: "D",

	rarity: "Uncommon",

	dexId: [
		834
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
