import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "タンドン"
	},
	rarity: "Common",
	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 70,
	types: [
		"Fighting"
	],
	stage: "Basic",
	dexId: [
		837
	],
	description: {
		ja: "およそ４００年前に 炭鉱で 見つかった。 体の ほとんどが 石炭と 同じ 成分。"
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
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 2,
	regulationMark: "D",
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
