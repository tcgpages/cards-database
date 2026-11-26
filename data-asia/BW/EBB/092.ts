import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "トルネロス"
	},
	illustrator: "Miki Tanaka",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		641
	],
	hp: 110,
	types: [
		"Colorless"
	],
	stage: "Basic",
	description: {
		ja: "雲のような エネルギー体に 下半身が 包まれている。 時速３００キロで 空を 飛ぶ。"
	},
	attacks: [
		{
			name: {
				ja: "エナジーウィール"
			},
			effect: {
				ja: "自分のベンチポケモンについているエネルギーを1個選び、このポケモンにつけ替える。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "ぼうふう"
			},
			effect: {
				ja: "このポケモンについている基本エネルギーを1個選び、ベンチポケモンにつけ替える。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 80
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
			value: "－20"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "normal"
		},
		{
			type: "reverse",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "reverse"
		}
	]
}

export default card
