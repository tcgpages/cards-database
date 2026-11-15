import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ギルガルドEX"
	},
	illustrator: "Ayaka Yoshida",
	rarity: "None",
	category: "Pokemon",
	hp: 170,
	types: [
		"Metal"
	],
	stage: "Basic",
	suffix: "EX",
	abilities: [
		{
			name: {
				ja: "マイティシールド"
			},
			effect: {
				ja: "このポケモンは、特殊エネルギーがついている相手のポケモンから、ワザのダメージを受けない。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "スラッシュブラスト"
			},
			effect: {
				ja: "このポケモンについている鋼エネルギーの数×20ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "40+"
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		}
	],
	retreat: 3,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
