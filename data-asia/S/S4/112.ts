import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,
	name: {
		ja: "イオルブVMAX"
	},
	illustrator: "5ban Graphics",
	rarity: "Hyper rare",
	category: "Pokemon",
	hp: 310,
	types: [
		"Grass"
	],
	stage: "VMAX",
	suffix: "VMAX",
	abilities: [
		{
			name: {
				ja: "かいこうせん"
			},
			effect: {
				ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。相手のポケモン全員に、それぞれダメカンを1個のせる。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "キョダイウェーブ"
			},
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×50ダメージ追加。"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: "50+"
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 1,
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
