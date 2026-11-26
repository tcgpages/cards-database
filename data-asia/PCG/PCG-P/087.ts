import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ロータのウソハチ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kagemaru Himeno",
	hp: 50,
	types: [
		"Fighting",
	],
	stage: "Basic",
	dexId: [
		438,
	],
	attacks: [
		{
			name: {
				ja: "だましうち",
			},
			effect: {
				ja: "相手のポケモン1匹に、そのポケモンの弱点・抵抗力・すべての効果に関係なく、20ダメージ。",
			},
			cost: [
				"Fighting",
				"Colorless",
			],
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
