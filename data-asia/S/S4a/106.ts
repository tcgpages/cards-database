import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "圓絲蛛",
		ja: "イトマル"
	},

	illustrator: "Kyoko Umemoto",

	category: "Pokemon",

	hp: 60,

	types: [
		"Darkness"
	],

	description: {
		'zh-tw': "總是一心一意地等待，直到愛吃的萌虻落入巢中。實在是很有耐心的寶可夢。",
		ja: "キバの 毒は さほど 強くないが 巣に かかって 動けない 獲物を 弱らせるには 充分。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "垂吊",
				ja: "ぶらさがる"
			},
			damage: 10,
			cost: [
				"Darkness"
			]
		},
		{
			name: {
				'zh-tw': "刺刺痛痛",
				ja: "チクチクさす"
			},
			damage: 20,
			cost: [
				"Darkness",
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
		167
	]
}

export default card
