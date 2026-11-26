import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ロータのゴンベ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kagemaru Himeno",
	hp: 60,
	types: [
		"Colorless",
	],
	stage: "Basic",
	dexId: [
		446,
	],
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				ja: "あついしぼう",
			},
			effect: {
				ja: "このポケモンが、{R}ポケモンまたは{W}ポケモンのワザによって受けるダメージは、「-30」される。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "ころがる",
			},
			cost: [
				"Colorless",
				"Colorless",
			],
			damage: 20,
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
