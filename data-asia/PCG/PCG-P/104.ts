import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "シャワーズ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Masakazu Fukuda",
	hp: 70,
	types: [
		"Water",
	],
	stage: "Stage1",
	evolveFrom: {
		ja: "イーブイ",
	},
	dexId: [
		134,
	],
	attacks: [
		{
			name: {
				ja: "かみつく",
			},
			cost: [
				"Colorless",
			],
			damage: 20,
		},
		{
			name: {
				ja: "みずでっぽう",
			},
			effect: {
				ja: "このワザに必要なエネルギーよりも多く{W}エネルギーがついているなら、多い{W}エネルギー×20ダメージを追加する。追加できるダメージは、{W}エネルギー2個ぶんまで。",
			},
			cost: [
				"Water",
				"Colorless",
			],
			damage: "30+",
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
