import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ドガース"
	},
	rarity: "Common",
	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 70,
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
				ja: "ガスでつつむ"
			},
			cost: [
				"Darkness"
			],
			damage: 10
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
			type: "normal"
		}
	]
}

export default card
