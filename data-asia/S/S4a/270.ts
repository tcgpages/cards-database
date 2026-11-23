import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "サダイジャ"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 140,
	types: [
		"Fighting"
	],
	evolveFrom: {
		ja: "スナヘビ"
	},
	stage: "Stage1",
	dexId: [
		844
	],
	description: {
		ja: "独特の とぐろの 巻き方は 砂袋の 砂を より 効率 よく 噴射 するため なのだ。"
	},
	attacks: [
		{
			name: {
				ja: "とぐろをまく"
			},
			effect: {
				ja: "次の自分の番、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+120」される。"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		},
		{
			name: {
				ja: "ロケットずつき"
			},
			cost: [
				"Fighting",
				"Colorless",
				"Colorless"
			],
			damage: 100
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
