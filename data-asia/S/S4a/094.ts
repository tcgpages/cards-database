import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小炭仔",
		ja: "タンドン"
	},

	illustrator: "Misa Tsutsui",

	category: "Pokemon",

	hp: 70,

	types: [
		"Fighting"
	],

	description: {
		'zh-tw': "大約４００年前在煤礦坑中被人們發現。身體絕大部分的成分都和煤炭相同。",
		ja: "およそ４００年前に 炭鉱で 見つかった。 体の ほとんどが 石炭と 同じ 成分。"
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
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		837
	]
}

export default card
