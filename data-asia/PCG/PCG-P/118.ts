import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウδ-デルタ種",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Ryo Ueda",
	hp: 40,
	types: [
		"Metal",
	],
	stage: "Basic",
	dexId: [
		25,
	],
	attacks: [
		{
			name: {
				ja: "ビリリパンチ",
			},
			cost: [
				"Colorless",
			],
			damage: 10,
		},
		{
			name: {
				ja: "ヘビーメタル",
			},
			effect: {
				ja: "自分の{M}エネルギーの数ぶんコインを投げ、オモテ×20ダメージを追加する。",
			},
			cost: [
				"Colorless",
				"Colorless",
			],
			damage: "10+",
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
