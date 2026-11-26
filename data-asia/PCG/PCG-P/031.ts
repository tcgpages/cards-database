import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ピチュー",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Nakaoka",
	hp: 40,
	types: [
		"Lightning",
	],
	stage: "Basic",
	dexId: [
		172,
	],
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				ja: "ベイビィしんか",
			},
			effect: {
				ja: "このパワーは、自分の番に1回使うことができる。自分の手札から「ピカチュウ」を1枚選び出し、このポケモンの上にのせ、進化させる。そのとき、このポケモンにのっているダメージカウンターをすべてとりのぞく。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "もってくる",
			},
			effect: {
				ja: "自分の山札からカードを1枚引く。",
			},
			cost: [
				"Colorless",
			],
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
			stamp: [
				"mcdonalds",
			],
		},
	],
}

export default card
