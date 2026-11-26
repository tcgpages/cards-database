import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ミュウ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Ken Sugimori",
	hp: 50,
	types: [
		"Psychic",
	],
	stage: "Basic",
	dexId: [
		151,
	],
	attacks: [
		{
			name: {
				ja: "ネオサイコウェーブ",
			},
			effect: {
				ja: "相手のポケモン1匹に、そのポケモンのエネルギーの数ぶんのダメージカウンターをのせる。",
			},
			cost: [
				"Psychic",
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
		},
	],
}

export default card
