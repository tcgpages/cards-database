import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Charmeleon"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
	category: "Pokemon",
	dexId: [
		5
	],
	hp: 80,
	types: [
		"Fire"
	],
	evolveFrom: {
		en: "Charmander"
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Ignition"
			},
			effect: {
				en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may take a {R} Energy from your Energy Zone and attach it to your Active {R} Pokémon."
			}
		}
	],
	attacks: [
		{
			name: {
				en: "Slash"
			},
			damage: 40,
			cost: [
				"Fire",
				"Fire"
			]
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		}
	],
	retreat: 2,
}

export default card
