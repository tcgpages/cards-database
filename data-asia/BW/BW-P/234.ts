import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ビクティニ"
	},
	rarity: "Promo",
	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 70,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		494
	],
	description: {
		ja: "ビクティニが 無限に 生みだす エネルギーを わけあたえてもらうと 全身に パワーが あふれだす。"
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
				"Psychic"
			]
		},
		{
			name: {
				ja: "でんこうせっか"
			},
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージを追加。"
			},
			cost: [
				"Psychic",
				"Colorless"
			],
			damage: "20+"
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
