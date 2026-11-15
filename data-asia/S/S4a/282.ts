import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ベロバー"
	},
	illustrator: "Misa Tsutsui",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: [
		"Darkness"
	],
	stage: "Basic",
	dexId: [
		859
	],
	description: {
		ja: "人や ポケモンが 嫌がる ときに 発する マイナスエネルギーを 鼻から 吸いこみ 元気になる。"
	},
	attacks: [
		{
			name: {
				ja: "たたく"
			},
			cost: [
				"Darkness"
			],
			damage: 10
		},
		{
			name: {
				ja: "ふむ"
			},
			cost: [
				"Darkness",
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Grass",
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
