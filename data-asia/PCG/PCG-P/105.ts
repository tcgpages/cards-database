import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ヘイガニ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Midori Harada",
	hp: 40,
	types: [
		"Water",
	],
	stage: "Basic",
	dexId: [
		341,
	],
	attacks: [
		{
			name: {
				ja: "じたばた",
			},
			effect: {
				ja: "自分のダメージカウンター×10ダメージ。",
			},
			cost: [
				"Colorless",
			],
			damage: "10×",
		},
		{
			name: {
				ja: "クラブハンマー",
			},
			cost: [
				"Water",
			],
			damage: 10,
		},
	],
	weaknesses: [
		{
			type: "Lightning",
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
