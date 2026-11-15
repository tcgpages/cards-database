import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ミュウツーEX"
	},
	illustrator: "PLANETA",
	rarity: "None",
	category: "Pokemon",
	hp: 170,
	types: [
		"Psychic"
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "バーストボール"
			},
			effect: {
				ja: "このポケモンについている超エネルギーの数×30ダメージ。"
			},
			cost: [
				"Psychic"
			],
			damage: "30×"
		},
		{
			name: {
				ja: "チェンジダメージ"
			},
			effect: {
				ja: "おたがいのバトルポケモンにのっているダメカンを、すべてのせ替える。"
			},
			cost: [
				"Psychic",
				"Psychic",
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
