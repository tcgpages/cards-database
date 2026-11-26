import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Diglett"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "One Diamond",
	category: "Pokemon",
	dexId: [
		50
	],
	hp: 60,
	types: [
		"Fighting"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Slight Intrusion"
			},
			damage: 30,
			cost: [
				"Fighting"
			],
			effect: {
				en: "This Pokémon also does 10 damage to itself."
			}
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		}
	],
	retreat: 1,
}

export default card
