import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ゴマゾウ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Tomokazu Komiya",
	hp: 50,
	types: [
		"Fighting",
	],
	stage: "Basic",
	dexId: [
		231,
	],
	attacks: [
		{
			name: {
				ja: "ダブルスピン",
			},
			effect: {
				ja: "コインを2回投げ、オモテ×10ダメージ。",
			},
			cost: [
				"Fighting",
			],
			damage: "10×",
		},
		{
			name: {
				ja: "のしかかり",
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手をマヒにする。",
			},
			cost: [
				"Colorless",
				"Colorless",
			],
			damage: 10,
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
