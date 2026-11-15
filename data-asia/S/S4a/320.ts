import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "クロバットVMAX"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare VMAX",
	category: "Pokemon",
	hp: 300,
	types: [
		"Darkness"
	],
	stage: "VMAX",
	suffix: "VMAX",
	attacks: [
		{
			name: {
				ja: "ステルスポイズン"
			},
			effect: {
				ja: "相手のバトルポケモンをどくにする。このポケモンをベンチポケモンと入れ替える。"
			},
			cost: [
				"Darkness",
				"Colorless"
			],
			damage: 70
		},
		{
			name: {
				ja: "ダイカッター"
			},
			cost: [
				"Darkness",
				"Darkness",
				"Colorless"
			],
			damage: 180
		}
	],
	weaknesses: [
		{
			type: "Fighting",
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
