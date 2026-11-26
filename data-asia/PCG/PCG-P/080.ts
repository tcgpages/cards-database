import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ミュウ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Masakazu Fukuda",
	hp: 50,
	types: [
		"Psychic",
	],
	stage: "Basic",
	dexId: [
		151,
	],
	attacks: [
		{
			name: {
				ja: "サイコウェーブ",
			},
			effect: {
				ja: "相手のエネルギー×10ダメージ。",
			},
			cost: [
				"Colorless",
			],
			damage: "10×",
		},
		{
			name: {
				ja: "たいかビーム",
			},
			effect: {
				ja: "コインを1回投げオモテなら、自分または相手の「進化ポケモン」を1匹選ぶ。その後、そのポケモンの上から「ポケモンのカード」を1枚はがし、退化させる。はがしたカードは、持ち主の手札にもどす。",
			},
			cost: [
				"Psychic",
			],
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
