import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ロータのマネネ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kouki Saitou",
	hp: 50,
	types: [
		"Psychic",
	],
	stage: "Basic",
	dexId: [
		439,
	],
	attacks: [
		{
			name: {
				ja: "フラフラダンス",
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手をこんらんにする。ウラなら、自分と相手をこんらんにする。",
			},
			cost: [
				"Colorless",
			],
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
