import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "炎兔兒",
		ja: "ヒバニー"
	},

	illustrator: "kirisAki",

	category: "Pokemon",

	hp: 60,

	types: [
		"Fire"
	],

	description: {
		'zh-tw': "不斷奔跑使體溫升高後，火之能量會在牠體內循環，促使牠發揮出真正的力量。",
		ja: "戦う 準備が 整うと 鼻の 頭と 足の 裏の 肉球が 高熱を 発する。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "火花",
				ja: "ひのこ"
			},
			effect: {
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			damage: 30,
			cost: [
				"Fire"
			]
		}
	],

	weaknesses: [
		{
			type: "Water",
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
		813
	]
}

export default card
