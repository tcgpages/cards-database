import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "コアルヒー"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 50,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		580
	],
	description: {
		ja: "飛ぶよりも 泳ぐのが 得意で 水中に 潜っては 大好きな 水ゴケを うれしそうに 食べる。"
	},
	attacks: [
		{
			name: {
				ja: "はばたく"
			},
			cost: [
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
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
