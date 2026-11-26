import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Morpeko"
	},
	illustrator: "Yuu Nishida",
	rarity: "One Star",
	category: "Pokemon",
	dexId: [
		877
	],
	hp: 70,
	types: [
		"Darkness"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Energizer Wheel"
			},
			damage: 50,
			cost: [
				"Darkness",
				"Darkness"
			],
			effect: {
				en: "Move 2 {D} Energy from this Pokémon to 1 of your Benched Pokémon."
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
