import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雙劍鞘",
		ja: "ニダンギル"
	},

	illustrator: "Aya Kusube",

	category: "Pokemon",

	hp: 90,

	types: [
		"Metal"
	],

	description: {
		'zh-tw': "進化之後變成了雙胞胎。用互相摩擦劍刃發出的聲音來威嚇對手。",
		ja: "進化して 双子に なった。 刃を 擦り合わせて 鳴らす 金属音で 相手を 威嚇。"
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "劈開",
				ja: "きりさく"
			},
			damage: 30,
			cost: [
				"Metal",
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "二連斬",
				ja: "ダブルスラッシュ"
			},
			effect: {
				'zh-tw': "擲2次硬幣，造成正面出現的次數×80點傷害。",
				ja: "コインを2回投げ、オモテの数×80ダメージ。"
			},
			damage: "80×",
			cost: [
				"Metal",
				"Metal",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		680
	]
}

export default card
