import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "サシカマス"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: [
		"Water"
	],
	stage: "Basic",
	dexId: [
		846
	],
	description: {
		ja: "鋭く 尖った 顎が 自慢。 少しでも 動くものを 見つけると 一直線に 突撃する。"
	},
	attacks: [
		{
			name: {
				ja: "みずかけ"
			},
			cost: [
				"Water"
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
