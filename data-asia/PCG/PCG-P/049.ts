import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ケンタロス",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kouki Saitou",
	hp: 70,
	types: [
		"Colorless",
	],
	stage: "Basic",
	dexId: [
		128,
	],
	attacks: [
		{
			name: {
				ja: "いかり",
			},
			effect: {
				ja: "自分のダメージカウンター×10ダメージを追加する。",
			},
			cost: [
				"Colorless",
				"Colorless",
			],
			damage: "10+",
		},
		{
			name: {
				ja: "とっしん",
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
			type: "Fighting",
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
