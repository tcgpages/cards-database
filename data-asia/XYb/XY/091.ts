import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "サーナイトEX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "None",
	category: "Pokemon",
	hp: 170,
	types: [
		"Fairy"
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "リンクブラスト"
			},
			effect: {
				ja: "このポケモンと相手のバトルポケモンについているエネルギーの数が同じなら、70ダメージを追加。"
			},
			cost: [
				"Fairy",
				"Colorless"
			],
			damage: "30+"
		},
		{
			name: {
				ja: "ひかりのやいば"
			},
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Fairy",
				"Fairy",
				"Colorless"
			],
			damage: 120
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Darkness",
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
