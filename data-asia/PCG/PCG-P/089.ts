import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ロータのマニューラ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kouki Saitou",
	hp: 70,
	types: [
		"Darkness",
	],
	stage: "Basic",
	dexId: [
		461,
	],
	attacks: [
		{
			name: {
				ja: "シャドーアタック",
			},
			effect: {
				ja: "相手のポケモン1匹に、ダメージカウンターを1個のせる。",
			},
			cost: [
				"Darkness",
			],
		},
		{
			name: {
				ja: "きりさく",
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			damage: 30,
		},
	],
	weaknesses: [
		{
			type: "Fighting",
		},
	],
	resistances: [
		{
			type: "Psychic",
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
