import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ミュウ"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		151
	],
	description: {
		ja: "遺伝子には すべての ポケモンの 情報が 含まれているので あらゆる 技が 使えるという。"
	},
	abilities: [
		{
			name: {
				ja: "はじまりのきおく"
			},
			effect: {
				ja: "このポケモンは、自分の場のたねポケモンが持つワザをすべて使える。［ワザを使うためのエネルギーは必要。］"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "エンカウント"
			},
			effect: {
				ja: "自分の山札からポケモンを1枚選び、相手に見せてから、手札に加える。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 0,
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
