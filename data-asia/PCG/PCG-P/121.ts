import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ゼニガメ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Atsuko Nishida",
	hp: 50,
	types: [
		"Water",
	],
	stage: "Basic",
	dexId: [
		7,
	],
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				ja: "こうらがくれ",
			},
			effect: {
				ja: "このポケモンにエネルギーがついているなら、このポケモンがワザによって受けるダメージは、「-10」される。",
			},
		},
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
			stamp: [
				"mcdonalds",
			],
		},
	],
}

export default card
