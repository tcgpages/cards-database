import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "メタモンV"
	},
	illustrator: "Saki Hayashiro",
	rarity: "Shiny rare V",
	category: "Pokemon",
	hp: 170,
	types: [
		"Colorless"
	],
	dexId: [
		132
	],
	stage: "Basic",
	suffix: "V",
	abilities: [
		{
			name: {
				ja: "Vへんげ"
			},
			effect: {
				ja: "自分の番に1回使える。自分のトラッシュからたねポケモンの「ポケモンV」を1枚選び、このポケモンと入れ替える（ついているカード・ダメカン・特殊状態・効果などは、すべて引きつぐ）。このポケモンは、トラッシュする。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ペタッとつく"
			},
			effect: {
				ja: "自分のトラッシュから基本エネルギーを1枚選び、このポケモンにつける。"
			},
			cost: [
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 2,
	regulationMark: "D",
	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
