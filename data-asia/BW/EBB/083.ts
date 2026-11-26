import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "サザンドラ"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		635
	],
	hp: 150,
	types: [
		"Dragon"
	],
	stage: "Stage2",
	description: {
		ja: "６枚の 羽で 空を 飛び続け 動くものを 敵と 思い込み 襲う 凶暴な ポケモン。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ダークトランス"
			},
			effect: {
				ja: "自分のポケモンについている悪エネルギーを1個選び、自分の別のポケモンにつけ替える。この特性は、自分の番に何回でも使える。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "リューズブラスト"
			},
			effect: {
				ja: "このポケモンについている悪エネルギーを2個選び、トラッシュする。"
			},
			cost: [
				"Psychic",
				"Darkness",
				"Darkness",
				"Colorless"
			],
			damage: 140
		}
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		}
	],
	retreat: 3,
	evolveFrom: {
		ja: "ジヘッド"
	},
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
