import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Mew"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Three Diamond",
	category: "Pokemon",
	dexId: [
		151
	],
	hp: 50,
	types: [
		"Psychic"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Miraculous Memory"
			},
			cost: [
				"Psychic",
				"Colorless"
			],
			effect: {
				en: "1 attack from among the Pokémon in your opponent's hand and deck is chosen at random, and you use the chosen attack as this attack."
			}
		}
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		}
	],
	retreat: 1,
}

export default card
