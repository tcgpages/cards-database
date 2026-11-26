import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "トゲピー",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Nakaoka",
	hp: 50,
	types: [
		"Colorless",
	],
	stage: "Basic",
	dexId: [
		175,
	],
	attacks: [
		{
			name: {
				ja: "スリーピーソング",
			},
			effect: {
				ja: "相手のバトルポケモン全員を、それぞれねむりにする。",
			},
			cost: [
				"Colorless",
			],
		},
	],
	weaknesses: [
		{
			type: "Fighting",
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
