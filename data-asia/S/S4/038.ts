import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "麻麻小魚",
		ja: "シビシラス"
	},

	illustrator: "sowsow",

	category: "Pokemon",

	hp: 40,

	types: [
		"Lightning"
	],

	description: {
		'zh-tw': "由於只能放出微弱的電，所以會由許多麻麻小魚聚集起來，放出強大的電流。",
		ja: "弱い 電気しか だせないので たくさんの シビシラスで 集まり 強力な 電気を 放つ。"
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "飄浮",
				ja: "ふゆう"
			},
			effect: {
				'zh-tw': "若這隻寶可夢身上附有能量，則這隻寶可夢【撤退】所需的能量全部消除。",
				ja: "このポケモンにエネルギーがついているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "小電氣",
				ja: "プチでんき"
			},
			damage: 10,
			cost: [
				"Lightning"
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

	rarity: "Common",

	dexId: [
		602
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
