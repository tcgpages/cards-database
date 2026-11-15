import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Volbeat"
	},
	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",
	dexId: [
		313
	],
	hp: 80,
	types: [
		"Grass"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Confuse Ray"
			},
			damage: 10,
			cost: [
				"Grass"
			],
			effect: {
				en: "Your opponent's Active Pokémon is now Confused."
			}
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		}
	],
	retreat: 1,
}

export default card
