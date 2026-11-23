import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ラプラスV"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare V",
	category: "Pokemon",
	hp: 210,
	types: [
		"Water"
	],
	dexId: [
		131
	],
	stage: "Basic",
	suffix: "V",
	attacks: [
		{
			name: {
				ja: "ウェーブバック"
			},
			effect: {
				ja: "自分の手札から水エネルギーを1枚選び、このポケモンにつける。その後、このポケモンをベンチポケモンと入れ替える。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "オーシャンループ"
			},
			effect: {
				ja: "このポケモンについている水エネルギーを2個選び、手札にもどす。"
			},
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless"
			],
			damage: 210
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 2,
	regulationMark: "D",
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
