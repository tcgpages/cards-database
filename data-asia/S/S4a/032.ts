import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "拉普拉斯VMAX",
		ja: "ラプラスVMAX"
	},

	illustrator: "5ban Graphics",

	category: "Pokemon",

	hp: 320,

	types: [
		"Water"
	],

	stage: "VMAX",

	attacks: [
		{
			name: {
				'zh-tw': "超極巨高壓水泵",
				ja: "キョダイポンプ"
			},
			effect: {
				'zh-tw': "增加這隻寶可夢身上附加的【水】能量的數量×30點傷害。",
				ja: "このポケモンについている水エネルギーの数×30ダメージ追加。"
			},
			damage: "90+",
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],

	retreat: 3,

	regulationMark: "D",

	rarity: "Holo Rare VMAX",

	suffix: "VMAX",

	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
