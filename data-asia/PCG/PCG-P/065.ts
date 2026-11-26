import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ワカシャモ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Mitsuhiro Arita",
	hp: 70,
	types: [
		"Fire",
	],
	stage: "Stage1",
	evolveFrom: {
		ja: "アチャモ",
	},
	dexId: [
		256,
	],
	attacks: [
		{
			name: {
				ja: "ひっかく",
			},
			cost: [
				"Colorless",
			],
			damage: 10,
		},
		{
			name: {
				ja: "かえんほうしゃ",
			},
			effect: {
				ja: "自分の{R}エネルギーを1個トラッシュする。",
			},
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			damage: 50,
		},
	],
	weaknesses: [
		{
			type: "Water",
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
