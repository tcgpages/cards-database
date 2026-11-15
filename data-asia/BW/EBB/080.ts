import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ガブリアス"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		445
	],
	hp: 140,
	types: [
		"Dragon"
	],
	stage: "Stage2",
	description: {
		ja: "高速で 駆け抜けると 翼は 空気の 刃を 生み出し まわりの木は 切断 されている。"
	},
	attacks: [
		{
			name: {
				ja: "おんそくぎり"
			},
			effect: {
				ja: "相手のバトルポケモンについている特殊エネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Fighting"
			],
			damage: 60
		},
		{
			name: {
				ja: "リューノブレード"
			},
			effect: {
				ja: "自分の山札を上から2枚トラッシュする。"
			},
			cost: [
				"Water",
				"Fighting"
			],
			damage: 100
		}
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		}
	],
	retreat: 1,
	evolveFrom: {
		ja: "ガブリアスex"
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
