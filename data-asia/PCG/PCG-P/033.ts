import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ヨーギラス",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Nakaoka",
	hp: 50,
	types: [
		"Fighting",
	],
	stage: "Basic",
	dexId: [
		246,
	],
	attacks: [
		{
			name: {
				ja: "じめんにもぐる",
			},
			effect: {
				ja: "相手のポケモン1匹に、弱点・抵抗力に関係なく、20ダメージ。",
			},
			cost: [
				"Fighting",
				"Colorless",
			],
		},
	],
	weaknesses: [
		{
			type: "Grass",
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
