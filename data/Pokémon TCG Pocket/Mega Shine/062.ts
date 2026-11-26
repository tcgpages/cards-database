import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Minccino"
	},
	illustrator: "kirisAki",
	rarity: "One Diamond",
	category: "Pokemon",
	dexId: [
		572
	],
	hp: 60,
	types: [
		"Colorless"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Play Rough"
			},
			damage: "10+",
			cost: [
				"Colorless"
			],
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage."
			}
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		}
	],
	retreat: 1,
}

export default card
