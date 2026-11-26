import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "カメックス",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Mitsuhiro Arita",
	hp: 120,
	types: [
		"Water",
	],
	stage: "Stage2",
	evolveFrom: {
		ja: "カメール",
	},
	dexId: [
		9,
	],
	attacks: [
		{
			name: {
				ja: "スマッシュターン",
			},
			effect: {
				ja: "のぞむなら、自分を自分のベンチポケモンと入れ替えてよい。",
			},
			cost: [
				"Colorless",
				"Colorless",
			],
			damage: 30,
		},
		{
			name: {
				ja: "ロケットタックル",
			},
			effect: {
				ja: "自分にも10ダメージ。コインを1回投げオモテなら、次の相手の番、自分はワザによるダメージを受けない。",
			},
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			damage: 60,
		},
	],
	weaknesses: [
		{
			type: "Lightning",
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
