import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ドガース"
	},
	illustrator: "Yumi",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: [
		"Darkness"
	],
	stage: "Basic",
	dexId: [
		109
	],
	description: {
		ja: "毒ガスで パンパンの 体。 生ゴミの 腐った においを 求め ゴミ捨て場に やってくる。"
	},
	attacks: [
		{
			name: {
				ja: "かくせい"
			},
			effect: {
				ja: "このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。"
			},
			cost: [
				"Darkness"
			]
		}
	],
	weaknesses: [
		{
			type: "Fighting",
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
