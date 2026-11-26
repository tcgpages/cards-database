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
				ja: "えんまく",
			},
			effect: {
				ja: "次の相手の番、このワザを受けた相手は、ワザを使うときコインを1回投げウラなら、そのワザは失敗する。",
			},
			cost: [
				"Fire",
			],
			damage: 10,
		},
		{
			name: {
				ja: "スカイアッパー",
			},
			effect: {
				ja: "このワザは、相手の抵抗力に関係なく、ダメージを与える。",
			},
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			damage: 40,
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
			stamp: [
				"mcdonalds",
			],
		},
	],
}

export default card
