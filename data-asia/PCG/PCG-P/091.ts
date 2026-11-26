import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ミュウ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Nakaoka",
	hp: 70,
	types: [
		"Psychic",
	],
	stage: "Basic",
	dexId: [
		151,
	],
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				ja: "リアクトシールド",
			},
			effect: {
				ja: "このポケモンに「リアクトエネルギー」がついているなら、このポケモンは、相手のワザによる効果を受けない。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "ねんりき",
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手をマヒにする。",
			},
			cost: [
				"Psychic",
				"Colorless",
			],
			damage: 20,
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
