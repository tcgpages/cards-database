import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ヌマクロー",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Midori Harada",
	hp: 70,
	types: [
		"Fighting",
	],
	stage: "Stage1",
	evolveFrom: {
		ja: "ミズゴロウ",
	},
	dexId: [
		259,
	],
	attacks: [
		{
			name: {
				ja: "どろかけ",
			},
			cost: [
				"Fighting",
			],
			damage: 20,
		},
		{
			name: {
				ja: "すてみタックル",
			},
			effect: {
				ja: "自分にも10ダメージ。",
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			damage: 40,
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
