import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "橡實果",
		ja: "タネボー"
	},

	illustrator: "Suwama Chiaki",

	category: "Pokemon",

	hp: 60,

	types: [
		"Grass"
	],

	description: {
		'zh-tw': "在牠一動也不動的時候，看起來和樹果一模一樣，以嚇唬來啄食自己的寶可夢為樂。",
		ja: "じっと 動かずに いると 木の実と そっくり。 ついばみに やって来た ポケモンを 驚かせて 遊ぶ。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "衝撞",
				ja: "ぶつかる"
			},
			damage: 10,
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

	rarity: "Common",

	dexId: [
		273
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
