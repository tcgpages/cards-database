import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "スナヘビ"
	},
	illustrator: "Akira Komayama",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: [
		"Fighting"
	],
	stage: "Basic",
	dexId: [
		843
	],
	description: {
		ja: "鼻の 穴から 砂を 噴射。 敵の 目を くらました 隙に 地中に 潜って 身を 隠す。"
	},
	attacks: [
		{
			name: {
				ja: "すなかけ"
			},
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。"
			},
			cost: [
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 2,
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
