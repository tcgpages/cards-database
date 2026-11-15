import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "メッソン"
	},
	illustrator: "Saya Tsuruta",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: [
		"Water"
	],
	stage: "Basic",
	dexId: [
		816
	],
	description: {
		ja: "怯えると 玉ねぎ１００個分の 催涙成分を もつ 涙を 流して もらい泣き させる。"
	},
	attacks: [
		{
			name: {
				ja: "みずでっぽう"
			},
			cost: [
				"Water"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Lightning",
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
