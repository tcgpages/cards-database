import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "R団のライコウex",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Ryo Ueda",
	hp: 100,
	types: [
		"Darkness",
	],
	stage: "Basic",
	suffix: "ex",
	dexId: [
		243,
	],
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				ja: "いなびかり",
			},
			effect: {
				ja: "このパワーは、自分の番に、このポケモンに手札から{D}エネルギーをつけるたび、1回使うことができる。相手のバトルポケモンを1匹選び、相手のベンチポケモンと入れ替える。入れ替えるベンチポケモンは相手プレイヤーが選ぶ。このポケモンが特殊状態なら、このパワーを使うことはできない。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "サンダーブロー",
			},
			effect: {
				ja: "自分の{L}エネルギー×10ダメージを追加する。",
			},
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			damage: "40+",
		},
	],
	weaknesses: [
		{
			type: "Fighting",
		},
	],
	retreat: 2,
	variants: [
		{
			type: "normal",
			stamp: [
				"battle-road",
			],
		},
	],
}

export default card
