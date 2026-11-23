import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "バチンキー"
	},
	illustrator: "tetsuya koizumi",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: [
		"Grass"
	],
	evolveFrom: {
		ja: "サルノリ"
	},
	stage: "Stage1",
	dexId: [
		811
	],
	description: {
		ja: "２本の スティックで 激しい ビートを 刻める バチンキーほど 仲間たちの 尊敬を 集める。"
	},
	abilities: [
		{
			name: {
				ja: "とちかん"
			},
			effect: {
				ja: "場に自分のスタジアムが出ているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "えだづき"
			},
			cost: [
				"Grass"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Fire",
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
