import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "掘掘兔",
		ja: "ホルビー"
	},

	illustrator: "Tomokazu Komiya",

	category: "Pokemon",

	hp: 40,

	types: [
		"Colorless"
	],

	description: {
		'zh-tw': "擅長用耳朵挖洞。只需一個晚上就能挖出深至地下１０公尺的巢穴。",
		ja: "耳で 穴を 掘るのが 得意。 地下１０メートルに とどく 巣穴を 一晩で つくってしまう。"
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

	rarity: "None",

	dexId: [
		659
	]
}

export default card
