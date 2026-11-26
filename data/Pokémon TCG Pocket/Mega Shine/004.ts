import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Illumise"
	},
	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",
	dexId: [
		314
	],
	hp: 80,
	types: [
		"Grass"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Mental Crush"
			},
			damage: "20+",
			cost: [
				"Grass"
			],
			effect: {
				en: "If your opponent's Active Pokémon is Confused, this attack does 40 more damage."
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
