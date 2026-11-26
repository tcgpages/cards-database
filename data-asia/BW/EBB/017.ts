import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ポカブ"
	},
	illustrator: "Kanako Eo",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		498
	],
	hp: 70,
	types: [
		"Fire"
	],
	stage: "Basic",
	description: {
		ja: "敵の 攻撃を 身軽に 避けて 鼻から 火の玉を 撃ち出す。 炎で 木の実を 焼いて 食べる。"
	},
	attacks: [
		{
			name: {
				ja: "とっしん"
			},
			effect: {
				ja: "このポケモンにも10ダメージ。"
			},
			cost: [
				"Fire",
				"Colorless"
			],
			damage: 30
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
