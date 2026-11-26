import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ミズゴロウ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Masakazu Fukuda",
	hp: 50,
	types: [
		"Water",
	],
	stage: "Basic",
	dexId: [
		258,
	],
	attacks: [
		{
			name: {
				ja: "みずのはどう",
			},
			effect: {
				ja: "相手を「ねむり」状態にする。",
			},
			cost: [
				"Water",
				"Colorless",
			],
			damage: 20,
		},
	],
	weaknesses: [
		{
			type: "Grass",
		},
	],
	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: [
				"mcdonalds",
			],
		},
	],
}

export default card
