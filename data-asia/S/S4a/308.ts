import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "リザードンVMAX"
	},
	illustrator: "aky CG Works",
	rarity: "Shiny rare VMAX",
	category: "Pokemon",
	hp: 330,
	types: [
		"Fire"
	],
	stage: "VMAX",
	suffix: "VMAX",
	attacks: [
		{
			name: {
				ja: "ツメできりさく"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 100
		},
		{
			name: {
				ja: "キョダイゴクエン"
			},
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。"
			},
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
				"Colorless"
			],
			damage: 300
		}
	],
	weaknesses: [
		{
			type: "Water",
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
