import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ゴリランダーVMAX"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare VMAX",
	category: "Pokemon",
	hp: 330,
	types: [
		"Grass"
	],
	stage: "VMAX",
	suffix: "VMAX",
	attacks: [
		{
			name: {
				ja: "ひっかく"
			},
			cost: [
				"Colorless"
			],
			damage: 50
		},
		{
			name: {
				ja: "ダイレンダ"
			},
			effect: {
				ja: "のぞむなら、このポケモンについている草エネルギーを3枚まで選び、トラッシュする。その場合、トラッシュした枚数×50ダメージ追加。"
			},
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless"
			],
			damage: "130+"
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 3,
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
