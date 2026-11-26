import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "リザードδ-デルタ種",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Mitsuhiro Arita",
	hp: 70,
	types: [
		"Lightning",
	],
	stage: "Stage1",
	evolveFrom: {
		ja: "ヒトカゲ",
	},
	dexId: [
		5,
	],
	attacks: [
		{
			name: {
				ja: "きりさく",
			},
			cost: [
				"Colorless",
				"Colorless",
			],
			damage: 20,
		},
		{
			name: {
				ja: "でんげき",
			},
			effect: {
				ja: "コインを1回投げウラなら、自分にも10ダメージ。",
			},
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			damage: 50,
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
		},
	],
}

export default card
