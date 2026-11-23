import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毛毛角羊V",
		ja: "バイウールーV"
	},

	illustrator: "5ban Graphics",

	category: "Pokemon",

	hp: 210,

	types: [
		"Colorless"
	],

	dexId: [
		832
	],
	stage: "Basic",

	suffix: "V",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "柔軟羊毛",
				ja: "やわらかウール"
			},
			effect: {
				'zh-tw': "這隻寶可夢受到招式的傷害「-30」點。",
				ja: "このポケモンが受けるワザのダメージは「-30」される。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "復仇暴擊",
				ja: "リベンジバースト"
			},
			effect: {
				'zh-tw': "增加對手已經獲得的獎賞卡的張數×30點傷害。",
				ja: "相手がすでにとったサイドの枚数×30ダメージ追加。"
			},
			damage: "120+",
			cost: [
				"Colorless",
				"Colorless",
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

	retreat: 2,

	regulationMark: "D",

	rarity: "Holo Rare V",

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
