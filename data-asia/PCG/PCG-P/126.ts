import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ポッポ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Hisao Nakamura",
	hp: 40,
	types: [
		"Colorless",
	],
	stage: "Basic",
	dexId: [
		16,
	],
	attacks: [
		{
			name: {
				ja: "でんこうせっか",
			},
			effect: {
				ja: "コインを1回投げオモテなら、10ダメージを追加。",
			},
			cost: [
				"Colorless",
				"Colorless",
			],
			damage: "20+",
		},
	],
	weaknesses: [
		{
			type: "Lightning",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
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
