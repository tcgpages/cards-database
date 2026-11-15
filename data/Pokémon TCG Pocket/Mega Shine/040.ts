import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Darkrai"
	},
	illustrator: "nagimiso",
	rarity: "Three Diamond",
	category: "Pokemon",
	dexId: [
		491
	],
	hp: 100,
	types: [
		"Darkness"
	],
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bad Dreams"
			},
			effect: {
				en: "At the end of each turn, if your opponent's Active Pokémon is Asleep, do 20 damage to that Pokémon."
			}
		}
	],
	attacks: [
		{
			name: {
				en: "Dark Slumber"
			},
			damage: 40,
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep."
			}
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		}
	],
	retreat: 2,
}

export default card
