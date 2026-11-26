import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ワニノコ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Shin-ichi Yoshikawa",
	hp: 50,
	types: [
		"Water",
	],
	stage: "Basic",
	dexId: [
		158,
	],
	attacks: [
		{
			name: {
				ja: "じたばた",
			},
			effect: {
				ja: "自分のダメージカウンター×10ダメージ。",
			},
			cost: [
				"Colorless",
			],
			damage: "10×",
		},
		{
			name: {
				ja: "かみつく",
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
			type: "Lightning",
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
