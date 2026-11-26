import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ミュウツーδ-デルタ種",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Ryo Ueda",
	hp: 70,
	types: [
		"Lightning",
	],
	stage: "Basic",
	dexId: [
		150,
	],
	attacks: [
		{
			name: {
				ja: "サイコイレース",
			},
			effect: {
				ja: "相手の持っているワザを1つ選ぶ。次の相手の番、このワザを受けた相手は、そのワザを使うことができない。",
			},
			cost: [
				"Colorless",
			],
		},
		{
			name: {
				ja: "スピードスター",
			},
			effect: {
				ja: "このワザは、相手の弱点・抵抗力・すべての効果に関係なく、ダメージを与える。",
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
