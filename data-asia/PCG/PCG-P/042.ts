import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "グラードン",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kouki Saitou",
	hp: 80,
	types: [
		"Fighting",
	],
	stage: "Basic",
	dexId: [
		383,
	],
	attacks: [
		{
			name: {
				ja: "きりさく",
			},
			cost: [
				"Fighting",
				"Colorless",
			],
			damage: 20,
		},
		{
			name: {
				ja: "ふんか",
			},
			effect: {
				ja: "おたがいの山札の上から、カードをそれぞれ1枚ずつトラッシュし、その中のエネルギーの枚数×10ダメージを追加する。",
			},
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			damage: "40+",
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
