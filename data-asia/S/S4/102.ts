import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,
	name: {
		ja: "ファイアローV"
	},
	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: [
		"Fire"
	],
	dexId: [
		663
	],
	stage: "Basic",
	suffix: "V",
	attacks: [
		{
			name: {
				ja: "ファストフライト"
			},
			effect: {
				ja: "このワザは、先攻プレイヤーの最初の番でも使える。自分の手札をすべてトラッシュし、山札を6枚引く。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "ぐれんのつばさ"
			},
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Fire",
				"Fire",
				"Colorless"
			],
			damage: 160
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
			value: "-30"
		}
	],
	retreat: 0,
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
