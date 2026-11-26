import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "デデンネ"
	},
	illustrator: "Mizue",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		702
	],
	description: {
		ja: "上の ヒゲは 辺りを 探る センサーで 下に 生えた ヒゲは 電気を 放つ 器官 なのだ。"
	},
	attacks: [
		{
			name: {
				ja: "マッドパーティ"
			},
			effect: {
				ja: "自分のトラッシュにある、ワザ「マッドパーティ」を持つポケモンの数×20ダメージ。"
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: "20×"
		}
	],
	weaknesses: [
		{
			type: "Metal",
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
