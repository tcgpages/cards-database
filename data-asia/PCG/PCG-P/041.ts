import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "レックウザ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kouki Saitou",
	hp: 80,
	types: [
		"Colorless",
	],
	stage: "Basic",
	dexId: [
		384,
	],
	attacks: [
		{
			name: {
				ja: "りゅうのまい",
			},
			effect: {
				ja: "次の自分の番、自分のバトルポケモン全員の、相手のバトルポケモンに与えるワザによるダメージは、すべて「+30」される。",
			},
			cost: [
				"Colorless",
				"Colorless",
			],
		},
		{
			name: {
				ja: "ドラゴンクロー",
			},
			cost: [
				"Fire",
				"Lightning",
				"Colorless",
			],
			damage: 40,
		},
	],
	weaknesses: [
		{
			type: "Colorless",
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
