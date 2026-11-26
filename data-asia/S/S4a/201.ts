import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "フクスロー"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: [
		"Grass"
	],
	evolveFrom: {
		ja: "モクロー"
	},
	stage: "Stage1",
	dexId: [
		723
	],
	description: {
		ja: "刃羽根 と 呼ばれる ナイフのような 羽根を 立て続けに 投げて 敵の 急所を 確実に つらぬく。"
	},
	attacks: [
		{
			name: {
				ja: "はっぱカッター"
			},
			cost: [
				"Grass"
			],
			damage: 40
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 1,
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
