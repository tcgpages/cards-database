import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ラティアスδ-デルタ種",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Mitsuhiro Arita",
	hp: 70,
	types: [
		"Fire",
	],
	stage: "Basic",
	dexId: [
		380,
	],
	attacks: [
		{
			name: {
				ja: "かえん",
			},
			cost: [
				"Fire",
				"Colorless",
			],
			damage: 20,
		},
		{
			name: {
				ja: "ほのおでこがす",
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをやけどにする。",
			},
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			damage: 40,
		},
	],
	weaknesses: [
		{
			type: "Colorless",
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30",
		},
		{
			type: "Fighting",
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
