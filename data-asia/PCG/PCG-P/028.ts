import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "チコリータ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Shin-ichi Yoshikawa",
	hp: 50,
	types: [
		"Grass",
	],
	stage: "Basic",
	dexId: [
		152,
	],
	attacks: [
		{
			name: {
				ja: "どくのこな",
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手をどくにする。",
			},
			cost: [
				"Colorless",
			],
		},
	],
	weaknesses: [
		{
			type: "Fire",
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30",
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
