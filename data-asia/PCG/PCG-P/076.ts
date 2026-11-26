import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ホウオウex",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Mitsuhiro Arita",
	hp: 110,
	types: [
		"Fire",
	],
	stage: "Basic",
	suffix: "ex",
	dexId: [
		250,
	],
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				ja: "きんのはばたき",
			},
			effect: {
				ja: "このパワーは、相手の番に、相手のワザによるダメージで、このポケモンの残りHPがなくなったとき、1回使うことができる。このポケモンのエネルギーを2個まで選び、自分のポケモンに好きなようにつけ替える。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "レインボーバーン",
			},
			effect: {
				ja: "自分についている基本エネルギーのタイプの数×20ダメージを追加する。(同じタイプの基本エネルギーが2個以上ついていても、そのタイプの追加ぶんは、20ダメージ。)",
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			damage: "10+",
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
		},
	],
}

export default card
