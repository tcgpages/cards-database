import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "イベルタルEX"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 170,
	types: [
		"Darkness"
	],
	dexId: [
		717
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "イビルボール"
			},
			effect: {
				ja: "おたがいのバトルポケモンについているエネルギーの数×20ダメージを追加。"
			},
			cost: [
				"Darkness",
				"Colorless"
			],
			damage: "20+"
		},
		{
			name: {
				ja: "サイクロンY"
			},
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。"
			},
			cost: [
				"Darkness",
				"Colorless",
				"Colorless"
			],
			damage: 90
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
