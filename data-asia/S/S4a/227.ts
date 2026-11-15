import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "カムカメ"
	},
	illustrator: "otumami",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: [
		"Water"
	],
	stage: "Basic",
	dexId: [
		833
	],
	description: {
		ja: "頭の ツノは 岩の 硬さ。 ツノで 戦い ひるんだ 隙に パクリと 噛みつき 離さない。"
	},
	attacks: [
		{
			name: {
				ja: "かみつく"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "みずでっぽう"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: 50
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
