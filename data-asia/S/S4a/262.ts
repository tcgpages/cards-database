import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル カモネギ"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: [
		"Fighting"
	],
	stage: "Basic",
	dexId: [
		83
	],
	description: {
		ja: "ガラルに 棲む カモネギの 姿。 太く たくましい ネギを 振るい 勇敢に 戦う 戦士。"
	},
	attacks: [
		{
			name: {
				ja: "いわくだき"
			},
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージ追加。"
			},
			cost: [
				"Fighting"
			],
			damage: "10+"
		},
		{
			name: {
				ja: "つきさす"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Psychic",
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
