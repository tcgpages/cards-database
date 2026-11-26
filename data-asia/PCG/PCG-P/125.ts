import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "フライゴン",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Hisao Nakamura",
	hp: 120,
	types: [
		"Fighting",
	],
	stage: "Stage2",
	evolveFrom: {
		ja: "ビブラーバ",
	},
	dexId: [
		330,
	],
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				ja: "ふゆう",
			},
			effect: {
				ja: "このポケモンにエネルギーがついているなら、このポケモンのにげるに必要なエネルギーは、すべてなくなる。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "かみつく",
			},
			cost: [
				"Fighting",
				"Colorless",
			],
			damage: 30,
		},
		{
			name: {
				ja: "すなじごく",
			},
			effect: {
				ja: "次の相手の番、このワザを受けた相手はにげるができない。",
			},
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			damage: 70,
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
			stamp: [
				"mcdonalds",
			],
		},
	],
}

export default card
