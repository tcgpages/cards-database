import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ニャースδ-デルタ種",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Mitsuhiro Arita",
	hp: 40,
	types: [
		"Darkness",
	],
	stage: "Basic",
	dexId: [
		52,
	],
	attacks: [
		{
			name: {
				ja: "だましうち",
			},
			effect: {
				ja: "相手のポケモン1匹に、そのポケモンの弱点・抵抗力・すべての効果に関係なく、10ダメージ。",
			},
			cost: [
				"Darkness",
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
