import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ゴリランダーV"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare V",
	category: "Pokemon",
	hp: 220,
	types: [
		"Grass"
	],
	dexId: [
		812
	],
	stage: "Basic",
	suffix: "V",
	attacks: [
		{
			name: {
				ja: "もりのうたげ"
			},
			effect: {
				ja: "自分の山札から草タイプのたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。"
			},
			cost: [
				"Grass"
			]
		},
		{
			name: {
				ja: "ウッドハンマー"
			},
			effect: {
				ja: "このポケモンにも30ダメージ。"
			},
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless"
			],
			damage: 220
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 3,
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
