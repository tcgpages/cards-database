import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ハブネーク",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Midori Harada",
	hp: 70,
	types: [
		"Grass",
	],
	stage: "Basic",
	dexId: [
		336,
	],
	attacks: [
		{
			name: {
				ja: "するどいキバ",
			},
			cost: [
				"Grass",
			],
			damage: 10,
		},
		{
			name: {
				ja: "どくどく",
			},
			effect: {
				ja: "相手をどくにする。このワザでどくになったポケモンは、ポケモンチェックのときにのせるどくのダメージカウンターの数が2個になる。",
			},
			cost: [
				"Grass",
				"Colorless",
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
