import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kagemaru Himeno",
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
				ja: "たいでん",
			},
			effect: {
				ja: "自分のトラッシュから{L}エネルギーを1枚選び出し、自分につける。",
			},
			cost: [
				"Lightning",
			],
		},
		{
			name: {
				ja: "たたきつける",
			},
			effect: {
				ja: "コインを2回投げ、オモテの数×20ダメージ。",
			},
			cost: [
				"Colorless",
				"Colorless",
			],
			damage: "20×",
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
