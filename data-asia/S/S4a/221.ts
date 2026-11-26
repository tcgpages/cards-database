import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "スイクン"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 120,
	types: [
		"Water"
	],
	stage: "Basic",
	dexId: [
		245
	],
	description: {
		ja: "一瞬で 汚く 濁った 水も 清める 力を 持つ。 北風の 生まれ変わり という。"
	},
	attacks: [
		{
			name: {
				ja: "スプラッシュ"
			},
			cost: [
				"Water"
			],
			damage: 20
		},
		{
			name: {
				ja: "オーロラループ"
			},
			effect: {
				ja: "このポケモンについている水エネルギーを2個選び、手札にもどす。"
			},
			cost: [
				"Water",
				"Water",
				"Colorless"
			],
			damage: 130
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 1,
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
