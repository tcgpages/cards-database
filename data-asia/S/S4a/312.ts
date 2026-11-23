import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ラプラスVMAX"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: [
		"Water"
	],
	dexId: [
		131
	],
	evolveFrom: {
		ja: "ラプラスV"
	},
	stage: "VMAX",
	attacks: [
		{
			name: {
				ja: "キョダイポンプ"
			},
			effect: {
				ja: "このポケモンについている水エネルギーの数×30ダメージ追加。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "90+"
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
