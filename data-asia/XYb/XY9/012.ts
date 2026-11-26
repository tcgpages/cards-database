import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "クイタラン"
	},
	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: [
		"Fire"
	],
	stage: "Basic",
	dexId: [
		631
	],
	description: {
		ja: "尻尾から 取りこんだ 空気を 炎に変えて ベロのように 使い アイアントを 溶かして 食べるぞ。"
	},
	attacks: [
		{
			name: {
				ja: "きょうかフレイム"
			},
			effect: {
				ja: "このポケモンに「ポケモンのどうぐ」がついているなら、20ダメージを追加。"
			},
			cost: [
				"Fire"
			],
			damage: "20+"
		},
		{
			name: {
				ja: "ヒートブラスト"
			},
			cost: [
				"Fire",
				"Colorless",
				"Colorless"
			],
			damage: 70
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 2,
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
