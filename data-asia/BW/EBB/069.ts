import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ランドロス"
	},
	illustrator: "Midori Harada",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		645
	],
	hp: 110,
	types: [
		"Fighting"
	],
	stage: "Basic",
	description: {
		ja: "ランドロスが 訪れる 土地は 作物が たくさん 実るため 畑の神様 と 言われている。"
	},
	attacks: [
		{
			name: {
				ja: "ほうさく"
			},
			effect: {
				ja: "自分のトラッシュから基本エネルギーを1枚選び、このポケモンにつける。"
			},
			cost: [
				"Fighting"
			]
		},
		{
			name: {
				ja: "ガイアハンマー"
			},
			effect: {
				ja: "おたがいのベンチポケモン全員にも、それぞれ10ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Fighting",
				"Fighting",
				"Colorless"
			],
			damage: 80
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Lightning",
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
