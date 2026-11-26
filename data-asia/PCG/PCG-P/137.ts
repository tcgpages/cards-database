import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "アクーシャのタマンタ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Atsuko Nishida",
	hp: 50,
	types: [
		"Water",
	],
	stage: "Basic",
	dexId: [
		458,
	],
	attacks: [
		{
			name: {
				ja: "みずあそび",
			},
			effect: {
				ja: "自分のエネルギーの数が、相手のエネルギーの数より少ないなら、10ダメージを追加する。",
			},
			cost: [
				"Water",
			],
			damage: "10+",
		},
		{
			name: {
				ja: "はねる",
			},
			cost: [
				"Colorless",
				"Colorless",
			],
			damage: 20,
		},
	],
	weaknesses: [
		{
			type: "Lightning",
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
