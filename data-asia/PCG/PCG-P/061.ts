import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ラティアス",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Nakaoka",
	hp: 70,
	types: [
		"Colorless",
	],
	stage: "Basic",
	dexId: [
		380,
	],
	attacks: [
		{
			name: {
				ja: "りゅうのしずく",
			},
			effect: {
				ja: "自分のポケモン1匹から、ダメージカウンターを1個とりのぞく。",
			},
			cost: [
				"Fire",
			],
			damage: 10,
		},
		{
			name: {
				ja: "ヒートブラスト",
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
			type: "Psychic",
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
