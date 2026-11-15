import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル バリヤード"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: [
		"Water"
	],
	stage: "Basic",
	dexId: [
		122
	],
	description: {
		ja: "タップダンスが 得意。 冷気で つくった 氷の 床を 蹴り上げ バリヤーの ごとく 身を 守る。"
	},
	attacks: [
		{
			name: {
				ja: "リフレクター"
			},
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。"
			},
			cost: [
				"Water"
			]
		},
		{
			name: {
				ja: "スノーアイス"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 30
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
