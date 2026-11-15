import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "泥驢仔",
		ja: "ドロバンコ"
	},

	illustrator: "Naoyo Kimura",

	category: "Pokemon",

	hp: 80,

	types: [
		"Fighting"
	],

	description: {
		'zh-tw': "力氣很大，能輕鬆搬運比自己重５０倍的貨物。非常擅長使用泥巴。",
		ja: "体重の ５０倍の 荷物を 軽々と 運ぶ 力持ち。 泥の 扱いに 長けている。"
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
		},
		{
			name: {
				'zh-tw': "後踢",
				ja: "うしろげり"
			},
			damage: 60,
			cost: [
				"Fighting",
				"Fighting",
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

	rarity: "Common",

	dexId: [
		749
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
