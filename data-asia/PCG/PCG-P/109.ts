import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ドンファン",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Tomoaki Imakuni",
	hp: 80,
	types: [
		"Fighting",
	],
	stage: "Stage1",
	evolveFrom: {
		ja: "ゴマゾウ",
	},
	dexId: [
		232,
	],
	attacks: [
		{
			name: {
				ja: "かぎわける",
			},
			effect: {
				ja: "自分のトラッシュのカードを1枚、相手プレイヤーに見せてから、手札に加える。",
			},
			cost: [
				"Colorless",
			],
		},
		{
			name: {
				ja: "みだれづき",
			},
			effect: {
				ja: "コインを3回投げ、オモテ×30ダメージ。",
			},
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			damage: "30×",
		},
	],
	weaknesses: [
		{
			type: "Grass",
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
