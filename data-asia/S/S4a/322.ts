import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "オーロンゲVMAX"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare VMAX",
	category: "Pokemon",
	hp: 330,
	types: [
		"Darkness"
	],
	dexId: [
		861
	],
	evolveFrom: {
		ja: "オーロンゲV"
	},
	stage: "VMAX",
	attacks: [
		{
			name: {
				ja: "キョダイドリル"
			},
			effect: {
				ja: "このワザを使うためのエネルギーより、多くついている悪エネルギーの数×50ダメージ追加。追加できるダメージは悪エネルギー2個ぶんまで。"
			},
			cost: [
				"Darkness",
				"Darkness",
				"Darkness"
			],
			damage: "170+"
		}
	],
	weaknesses: [
		{
			type: "Grass",
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
