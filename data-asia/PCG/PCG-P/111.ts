import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "イーブイ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Masakazu Fukuda",
	hp: 50,
	types: [
		"Colorless",
	],
	stage: "Basic",
	dexId: [
		133,
	],
	attacks: [
		{
			name: {
				ja: "たいあたり",
			},
			cost: [
				"Colorless",
			],
			damage: 10,
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
			],
			damage: 30,
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
