import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ウオチルドン"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 150,
	types: [
		"Water"
	],
	evolveFrom: {
		ja: "めずらしい化石"
	},
	stage: "Stage1",
	dexId: [
		883
	],
	description: {
		ja: "周囲を 凍りつかせて 獲物を 捕まえるが 口が 頭の 上に あるので 食べづらい。"
	},
	attacks: [
		{
			name: {
				ja: "かたいかお"
			},
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-60」される。"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: 90
		},
		{
			name: {
				ja: "コールドブレス"
			},
			effect: {
				ja: "相手のバトルポケモンをねむりにする。"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 130
		}
	],
	weaknesses: [
		{
			type: "Lightning",
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
