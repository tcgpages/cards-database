import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ヒノアラシ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Ken Ikuji",
	hp: 50,
	types: [
		"Fire",
	],
	stage: "Basic",
	dexId: [
		155,
	],
	attacks: [
		{
			name: {
				ja: "スピードスター",
			},
			effect: {
				ja: "このワザは、相手の弱点・抵抗力・すべての効果に関係なく、ダメージを与える。",
			},
			cost: [
				"Colorless",
			],
			damage: 10,
		},
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
	],
	weaknesses: [
		{
			type: "Water",
		},
	],
	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: [
				"mcdonalds",
			],
		},
	],
}

export default card
