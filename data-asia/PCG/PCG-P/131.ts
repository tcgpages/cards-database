import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "キモリδ-デルタ種",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Masakazu Fukuda",
	hp: 40,
	types: [
		"Psychic",
	],
	stage: "Basic",
	dexId: [
		252,
	],
	attacks: [
		{
			name: {
				ja: "はたく",
			},
			cost: [
				"Colorless",
			],
			damage: 10,
		},
		{
			name: {
				ja: "ひかるつめ",
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手をこんらんにする。",
			},
			cost: [
				"Psychic",
			],
			damage: 10,
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
		},
	],
}

export default card
