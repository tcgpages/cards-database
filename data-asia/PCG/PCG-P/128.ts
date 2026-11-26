import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "チリーンδ-デルタ種",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Masakazu Fukuda",
	hp: 60,
	types: [
		"Metal",
	],
	stage: "Basic",
	dexId: [
		358,
	],
	attacks: [
		{
			name: {
				ja: "まきつく",
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手をマヒにする。",
			},
			cost: [
				"Colorless",
			],
		},
		{
			name: {
				ja: "ソニックブーム",
			},
			effect: {
				ja: "このワザは、相手の弱点・抵抗力に関係なく、ダメージを与える。",
			},
			cost: [
				"Metal",
				"Colorless",
			],
			damage: 30,
		},
	],
	weaknesses: [
		{
			type: "Psychic",
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
