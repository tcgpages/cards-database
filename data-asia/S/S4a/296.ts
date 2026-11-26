import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ホルビー"
	},
	illustrator: "Misa Tsutsui",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 40,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		659
	],
	description: {
		ja: "耳で 穴を 掘るのが 得意。 地下１０メートルに とどく 巣穴を 一晩で つくってしまう。"
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
				"Colorless",
				"Colorless"
			],
			damage: "20×"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
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
