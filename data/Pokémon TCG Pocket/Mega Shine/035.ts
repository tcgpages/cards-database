import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Groudon"
	},
	illustrator: "Uta",
	rarity: "Three Diamond",
	category: "Pokemon",
	dexId: [
		383
	],
	hp: 130,
	types: [
		"Fighting"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Gaia Blast"
			},
			damage: 130,
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless"
			],
			effect: {
				en: "Discard 2 random Energy from among the Energy attached to all of your Pokémon."
			}
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		}
	],
	retreat: 3,
}

export default card
