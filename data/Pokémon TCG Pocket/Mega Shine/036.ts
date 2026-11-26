import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Hawlucha"
	},
	illustrator: "GOSSAN",
	rarity: "One Diamond",
	category: "Pokemon",
	dexId: [
		701
	],
	hp: 80,
	types: [
		"Fighting"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Take Down"
			},
			damage: 50,
			cost: [
				"Colorless",
				"Colorless"
			],
			effect: {
				en: "This Pokémon also does 10 damage to itself."
			}
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		}
	],
	retreat: 1,
}

export default card
