import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小仙奶",
		ja: "マホミル"
	},

	illustrator: "Kouki Saitou",

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
				'zh-tw': "甜甜香氣",
				ja: "あまいかおり"
			},
			effect: {
				'zh-tw': "選擇自己的1隻寶可夢，恢復「20」HP。",
				ja: "自分のポケモンを1匹選び、HPを「20」回復する。"
			},
			cost: [
				"Psychic"
			]
		},
		{
			name: {
				'zh-tw': "撞擊",
				ja: "たいあたり"
			},
			damage: 10,
			cost: [
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

	rarity: "Common",

	dexId: [
		868
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
