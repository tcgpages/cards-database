import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ラグラージ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Atsuko Nishida",
	hp: 110,
	types: [
		"Water",
	],
	stage: "Stage2",
	evolveFrom: {
		ja: "ヌマクロー",
	},
	dexId: [
		260,
	],
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				ja: "ウォーターサイクロン",
			},
			effect: {
				ja: "このパワーは、自分の番に何回でも使うことができる。自分のバトルポケモンの{W}エネルギーを1個選び、自分のベンチポケモンにつけ替える。このポケモンが特殊状態なら、このパワーを使うことはできない。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "スピンテール",
			},
			effect: {
				ja: "相手のポケモン全員に、それぞれ10ダメージ。",
			},
			cost: [
				"Colorless",
			],
		},
		{
			name: {
				ja: "アクアソニック",
			},
			effect: {
				ja: "このワザは、相手の抵抗力に関係なく、ダメージを与える。",
			},
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			damage: 60,
		},
	],
	weaknesses: [
		{
			type: "Grass",
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
