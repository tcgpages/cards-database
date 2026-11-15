import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "リザードンV"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare V",
	category: "Pokemon",
	hp: 220,
	types: [
		"Fire"
	],
	stage: "Basic",
	suffix: "V",
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
			damage: 80
		},
		{
			name: {
				ja: "ほのおのうず"
			},
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。"
			},
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless"
			],
			damage: 220
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
