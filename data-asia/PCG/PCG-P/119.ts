import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ジュカイン",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Atsuko Nishida",
	hp: 100,
	types: [
		"Grass",
	],
	stage: "Stage2",
	evolveFrom: {
		ja: "ジュプトル",
	},
	dexId: [
		254,
	],
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				ja: "エナジートランス",
			},
			effect: {
				ja: "このパワーは、自分の番に何回でも使うことができる。自分のポケモンの{G}エネルギーを1個選び、自分の別のポケモンにつけ替える。このポケモンが特殊状態なら、このパワーを使うことはできない。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "しっぽビンタ",
			},
			effect: {
				ja: "コインを2回投げ、オモテ×50ダメージ。",
			},
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			damage: "50×",
		},
	],
	weaknesses: [
		{
			type: "Fire",
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30",
		},
	],
	retreat: 3,
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
