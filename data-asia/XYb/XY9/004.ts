import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "タネボー"
	},
	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: [
		"Grass"
	],
	stage: "Basic",
	dexId: [
		273
	],
	description: {
		ja: "枝に ぶらさがっていると 木の実に そっくり。 ついばもうとした ポケモンを 驚かせて 喜ぶ。"
	},
	attacks: [
		{
			name: {
				ja: "ぶつかる"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
