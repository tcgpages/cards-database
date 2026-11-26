import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ミュウδ-デルタ種",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Masakazu Fukuda",
	hp: 60,
	types: [
		"Fire",
	],
	stage: "Basic",
	dexId: [
		151,
	],
	attacks: [
		{
			name: {
				ja: "まねる",
			},
			effect: {
				ja: "相手の持っているワザを1つ選び、そのワザのダメージや効果を、このワザのものとして使う。(そのワザに必要なエネルギーが自分についていないなら、このワザは失敗する。)",
			},
			cost: [
				"Colorless",
			],
		},
		{
			name: {
				ja: "エクストラドロー",
			},
			effect: {
				ja: "相手の場にポケモンexがいるなら、自分の山札から基本エネルギーを2枚まで選び出し、自分につける。その後、その山札を切る。",
			},
			cost: [
				"Fire",
			],
		},
	],
	weaknesses: [
		{
			type: "Psychic",
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
