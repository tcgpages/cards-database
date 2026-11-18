import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Paldean Tauros"
	},
	illustrator: "AKIRA EGAWA",
	rarity: "One Diamond",
	category: "Pokemon",
	dexId: [
		128
	],
	hp: 100,
	types: [
		"Fire"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Take Down"
			},
			damage: 60,
			cost: [
				"Fire",
				"Fire"
			],
			effect: {
				en: "This Pokémon also does 20 damage to itself."
			}
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		}
	],
	retreat: 1,
}

export default card
