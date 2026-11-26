import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル デスマス"
	},
	illustrator: "sowsow",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: [
		"Fighting"
	],
	stage: "Basic",
	dexId: [
		562
	],
	description: {
		ja: "呪いが 刻まれた 粘土板が デスマスに 憑りついた。 怨念 パワーを 吸いとっていると いう。"
	},
	attacks: [
		{
			name: {
				ja: "とつげき"
			},
			effect: {
				ja: "このポケモンにも30ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 50
		}
	],
	weaknesses: [
		{
			type: "Grass",
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
