import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Yuka Morii",
	hp: 40,
	types: [
		"Lightning",
	],
	stage: "Basic",
	dexId: [
		25,
	],
	attacks: [
		{
			name: {
				ja: "かじる",
			},
			cost: [
				"Colorless",
			],
			damage: 10,
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
			],
			damage: 30,
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
		},
	],
}

export default card
