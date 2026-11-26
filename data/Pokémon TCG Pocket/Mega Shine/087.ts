import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Scyther"
	},
	illustrator: "Krgc",
	rarity: "One Shiny",
	category: "Pokemon",
	dexId: [
		123
	],
	hp: 70,
	types: [
		"Grass"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "U-turn"
			},
			damage: 10,
			cost: [
				"Colorless"
			],
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon."
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
