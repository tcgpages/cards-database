import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小仙奶",
		ja: "マホミル"
	},

	illustrator: "Mina Nakai",

	category: "Pokemon",

	hp: 50,

	types: [
		"Psychic"
	],

	description: {
		'zh-tw': "空氣中甜甜香氣的成分集中之後誕生。身體由鮮奶油構成。",
		ja: "クリームで できた 体を もつ。 空気中の 甘い 香りの 成分が 集まって 生まれた。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "芳香治療",
				ja: "アロマセラピー"
			},
			effect: {
				'zh-tw': "將自己的所有寶可夢各恢復「10」HP。",
				ja: "自分のポケモン全員のHPを、それぞれ「10」回復する。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "撞擊",
				ja: "たいあたり"
			},
			damage: 20,
			cost: [
				"Psychic",
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
		868
	]
}

export default card
