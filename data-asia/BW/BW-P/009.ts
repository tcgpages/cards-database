import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトモシ"
	},
	rarity: "Promo",
	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 50,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		607
	],
	description: {
		ja: "ヒトモシの 灯す 明かりは 人や ポケモンの 生命力を 吸い取って 燃えているのだ。"
	},
	attacks: [
		{
			name: {
				ja: "なかまをよぶ"
			},
			effect: {
				ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "おにび"
			},
			cost: [
				"Psychic",
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
