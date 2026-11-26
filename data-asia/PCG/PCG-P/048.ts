import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ポケパークのミズゴロウ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kanako Eo",
	hp: 60,
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
				ja: "どろかけ",
			},
			cost: [
				"Colorless",
			],
			damage: 10,
		},
		{
			name: {
				ja: "うずしお",
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のエネルギーを1個トラッシュする。",
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			damage: 30,
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
		},
	],
}

export default card
