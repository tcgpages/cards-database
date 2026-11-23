import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "アイアント"
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: [
		"Grass"
	],
	stage: "Basic",
	dexId: [
		632
	],
	description: {
		ja: "鋼の よろいを 身にまとう。 天敵の クイタランの 攻撃を 集団で 防ぎ 反撃する。"
	},
	attacks: [
		{
			name: {
				ja: "やまかじり"
			},
			effect: {
				ja: "相手の山札を上から1枚トラッシュする。"
			},
			cost: [
				"Grass"
			],
			damage: 10
		},
		{
			name: {
				ja: "ガリガリけずる"
			},
			effect: {
				ja: "このポケモンにダメカンがのっているなら、相手の山札を上から4枚トラッシュする。"
			},
			cost: [
				"Grass",
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
