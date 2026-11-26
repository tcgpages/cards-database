import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ラティオス",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kyoko Koizumi",
	hp: 80,
	types: [
		"Colorless",
	],
	stage: "Basic",
	dexId: [
		381,
	],
	attacks: [
		{
			name: {
				ja: "エナジーコントロール",
			},
			effect: {
				ja: "コインを1回投げオモテなら、自分の山札から基本エネルギーを1枚選び出し、自分のポケモンにつける。その後、その山札を切る。",
			},
			cost: [
				"Lightning",
				"Colorless",
			],
			damage: 20,
		},
		{
			name: {
				ja: "ドラゴンクロー",
			},
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			damage: 40,
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
