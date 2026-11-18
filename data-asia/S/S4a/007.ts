import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "啪咚猴",
		ja: "バチンキー"
	},

	illustrator: "0313",

	category: "Pokemon",

	hp: 90,

	types: [
		"Grass"
	],

	description: {
		'zh-tw': "越是能用２根木棒敲奏出激烈節拍的啪咚猴，越是能獲得夥伴們的尊敬。",
		ja: "２本の スティックで 激しい ビートを 刻める バチンキーほど 仲間たちの 尊敬を 集める。"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "地方達人",
				ja: "とちかん"
			},
			effect: {
				'zh-tw': "若場上有自己的競技場卡，則這隻寶可夢【撤退】所需的能量全部消除。",
				ja: "場に自分のスタジアムが出ているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "木枝突刺",
				ja: "えだづき"
			},
			damage: 20,
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

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		811
	]
}

export default card
