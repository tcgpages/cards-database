import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "咚咚鼠",
		ja: "デデンネ"
	},

	illustrator: "Shibuzoh.",

	category: "Pokemon",

	hp: 70,

	types: [
		"Psychic"
	],

	description: {
		'zh-tw': "用尾巴從發電廠或民宅的插座吸取電力，並從鬍鬚放出電擊。",
		ja: "上の ヒゲは 辺りを 探る センサーで 下に 生えた ヒゲは 電気を 放つ 器官 なのだ。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "瘋狂派對",
				ja: "マッドパーティ"
			},
			effect: {
				'zh-tw': "造成自己的棄牌區的，持有「瘋狂派對」招式的寶可夢的數量×20點傷害。",
				ja: "自分のトラッシュにある、ワザ「マッドパーティ」を持つポケモンの数×20ダメージ。"
			},
			damage: "20×",
			cost: [
				"Psychic",
				"Colorless",
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

	retreat: 1,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		702
	]
}

export default card
