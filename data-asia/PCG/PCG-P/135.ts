import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ホウオウ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Mitsuhiro Arita",
	hp: 80,
	types: [
		"Fire",
	],
	stage: "Basic",
	dexId: [
		250,
	],
	attacks: [
		{
			name: {
				ja: "ほのおのつばさ",
			},
			cost: [
				"Fire",
				"Colorless",
			],
			damage: 20,
		},
		{
			name: {
				ja: "だいもんじ",
			},
			effect: {
				ja: "自分の{R}エネルギーを1個トラッシュする。",
			},
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			damage: 60,
		},
	],
	weaknesses: [
		{
			type: "Water",
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
