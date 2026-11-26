import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ツボツボ"
	},
	illustrator: "MAHOU",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		213
	],
	hp: 80,
	types: [
		"Grass"
	],
	stage: "Basic",
	description: {
		ja: "ツボのような 甲羅の 中に ためこんだ きのみは いつのまにか ドロドロの ジュースに 変わる。"
	},
	attacks: [
		{
			name: {
				ja: "おすそわけ"
			},
			effect: {
				ja: "自分のベンチポケモンを1匹選び、HPを「40」回復する。"
			},
			cost: [
				"Grass"
			]
		},
		{
			name: {
				ja: "にどづき"
			},
			effect: {
				ja: "コインを2回投げ、オモテの数×40ダメージ。"
			},
			cost: [
				"Grass",
				"Grass",
				"Colorless"
			],
			damage: "40×"
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
