import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鴨寶寶",
		ja: "コアルヒー"
	},

	illustrator: "Midori Harada",

	category: "Pokemon",

	hp: 50,

	types: [
		"Colorless"
	],

	description: {
		'zh-tw': "比起飛行更擅長游泳。一潛入水中就會開心地吃起最愛的水苔。",
		ja: "飛ぶよりも 泳ぐのが 得意で 水中に 潜っては 大好きな 水ゴケを うれしそうに 食べる。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "羽擊",
				ja: "はばたく"
			},
			damage: 20,
			cost: [
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

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		580
	]
}

export default card
