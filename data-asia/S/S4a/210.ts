import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ワタシラガ"
	},
	illustrator: "Mizue",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: [
		"Grass"
	],
	stage: "Stage1",
	dexId: [
		830
	],
	description: {
		ja: "頭の 綿毛で つくった 糸は 光沢があり とても 美しい。 ガラル地方の 名産品。"
	},
	attacks: [
		{
			name: {
				ja: "めぐみのわたげ"
			},
			effect: {
				ja: "自分の山札から草エネルギーを3枚まで選び、ベンチポケモンに好きなようにつける。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "このは"
			},
			cost: [
				"Grass"
			],
			damage: 30
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
