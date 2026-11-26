import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "フシギソウ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Ken Sugimori",
	hp: 80,
	types: [
		"Grass",
	],
	stage: "Stage1",
	evolveFrom: {
		ja: "フシギダネ",
	},
	dexId: [
		2,
	],
	attacks: [
		{
			name: {
				ja: "どくのたね",
			},
			effect: {
				ja: "相手を「どく」状態にする。",
			},
			cost: [
				"Colorless",
			],
		},
		{
			name: {
				ja: "はっぱカッター",
			},
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			damage: 50,
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
