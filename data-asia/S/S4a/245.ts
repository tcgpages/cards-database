import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "パッチルドン"
	},
	illustrator: "nagimiso",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: [
		"Lightning"
	],
	stage: "Stage1",
	dexId: [
		881
	],
	description: {
		ja: "氷漬けの 上半身が 震えると 電気が つくられる。 歩くことが 非常に 苦手。"
	},
	abilities: [
		{
			name: {
				ja: "かじかむうず"
			},
			effect: {
				ja: "このポケモンがいるかぎり、相手は手札からエネルギーをポケモンにつけるたび、そのポケモンにダメカンを2個のせる。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "エレキボール"
			},
			cost: [
				"Lightning",
				"Colorless"
			],
			damage: 70
		}
	],
	weaknesses: [
		{
			type: "Fighting",
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
