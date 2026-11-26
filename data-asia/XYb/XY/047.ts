import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ソーナンス"
	},
	illustrator: "sui",
	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		202
	],
	description: {
		ja: "光や ショックを 嫌う。 攻撃されると 体が ふくらみ 反撃が 強力に なる。"
	},
	abilities: [
		{
			name: {
				ja: "がまんのかべ"
			},
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、おたがいの場・手札・トラッシュにあるポケモン（超ポケモンはのぞく）の特性は、すべてなくなる。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "サイコダメージ"
			},
			effect: {
				ja: "相手のバトルポケモンにのっているダメカンの数×10ダメージを追加。"
			},
			cost: [
				"Psychic",
				"Colorless"
			],
			damage: "10+"
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
			foil: "mirror"
		}
	]
}

export default card
