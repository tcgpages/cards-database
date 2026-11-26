import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "蒼海のマナフィ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kagemaru Himeno",
	hp: 60,
	types: [
		"Water",
	],
	stage: "Basic",
	dexId: [
		490,
	],
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				ja: "ちょすい",
			},
			effect: {
				ja: "このポケモンに、手札から{W}エネルギーをつけたとき、このポケモンのダメージカウンターを1個とりのぞき、特殊状態をすべて回復させる。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "ウォーターパンチ",
			},
			effect: {
				ja: "自分のエネルギーの数ぶんコインを投げ、オモテ×10ダメージを追加する。",
			},
			cost: [
				"Colorless",
				"Colorless",
			],
			damage: "20+",
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
