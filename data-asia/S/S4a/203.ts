import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "サルノリ"
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: [
		"Grass"
	],
	stage: "Basic",
	dexId: [
		810
	],
	description: {
		ja: "特別な スティックで リズムを 刻むと 草花を 元気にする パワーが 音波になって 広がる。"
	},
	attacks: [
		{
			name: {
				ja: "みだれひっかき"
			},
			effect: {
				ja: "コインを3回投げ、オモテの数×10ダメージ。"
			},
			cost: [
				"Colorless"
			],
			damage: "10×"
		}
	],
	weaknesses: [
		{
			type: "Fire",
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
