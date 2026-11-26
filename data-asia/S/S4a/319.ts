import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "タイレーツV"
	},
	illustrator: "aky CG Works",
	rarity: "Shiny rare V",
	category: "Pokemon",
	hp: 160,
	types: [
		"Fighting"
	],
	dexId: [
		870
	],
	stage: "Basic",
	suffix: "V",
	abilities: [
		{
			name: {
				ja: "てっぺきのじん"
			},
			effect: {
				ja: "このポケモンがいるかぎり、自分の場の、名前に「タイレーツ」とつくポケモン全員が、相手のポケモンから受けるワザのダメージは「-20」される。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ギガインパクト"
			},
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。"
			},
			cost: [
				"Fighting",
				"Fighting",
				"Colorless"
			],
			damage: 210
		}
	],
	weaknesses: [
		{
			type: "Psychic",
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
