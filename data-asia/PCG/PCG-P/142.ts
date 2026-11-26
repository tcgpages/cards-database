import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "アサナン",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Midori Harada",
	hp: 40,
	types: [
		"Fighting",
	],
	stage: "Basic",
	dexId: [
		307,
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
			],
			damage: 10,
		},
		{
			name: {
				ja: "クロスチョップ",
			},
			effect: {
				ja: "コインを1回投げオモテなら、10ダメージを追加。",
			},
			cost: [
				"Fighting",
			],
			damage: "10+",
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
