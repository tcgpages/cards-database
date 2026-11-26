import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "蒼海のマナフィ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Atsuko Nishida",
	hp: 60,
	types: [
		"Water",
	],
	stage: "Basic",
	dexId: [
		490,
	],
	attacks: [
		{
			name: {
				ja: "ピックアップ",
			},
			effect: {
				ja: "自分のトラッシュからエネルギーを1枚選び出し、相手プレイヤーに見せてから、手札に加える。",
			},
			cost: [
				"Colorless",
			],
		},
		{
			name: {
				ja: "アクアブラスト",
			},
			effect: {
				ja: "自分の{W}エネルギーを1個トラッシュする。",
			},
			cost: [
				"Water",
				"Colorless",
			],
			damage: 30,
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
