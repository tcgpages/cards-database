import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトカゲδ-デルタ種",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Mitsuhiro Arita",
	hp: 50,
	types: [
		"Lightning",
	],
	stage: "Basic",
	dexId: [
		4,
	],
	attacks: [
		{
			name: {
				ja: "ひっかく",
			},
			cost: [
				"Colorless",
			],
			damage: 10,
		},
		{
			name: {
				ja: "かみつく",
			},
			cost: [
				"Lightning",
				"Colorless",
			],
			damage: 20,
		},
	],
	weaknesses: [
		{
			type: "Water",
		},
	],
	retreat: 1,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
