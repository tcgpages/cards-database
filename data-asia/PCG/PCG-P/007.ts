import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "バシャーモ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Katsura Tabata",
	hp: 110,
	types: [
		"Fire",
	],
	stage: "Stage2",
	evolveFrom: {
		ja: "ワカシャモ",
	},
	dexId: [
		257,
	],
	attacks: [
		{
			name: {
				ja: "ほのおパンチ",
			},
			cost: [
				"Fire",
				"Colorless",
			],
			damage: 40,
		},
		{
			name: {
				ja: "にどげり",
			},
			effect: {
				ja: "コインを2回投げ、オモテ×50ダメージ。",
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			damage: "50×",
		},
	],
	weaknesses: [
		{
			type: "Water",
		},
	],
	retreat: 2,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
