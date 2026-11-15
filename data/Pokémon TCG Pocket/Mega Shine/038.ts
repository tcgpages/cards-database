import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Haunter"
	},
	illustrator: "DOM",
	rarity: "Two Diamond",
	category: "Pokemon",
	dexId: [
		93
	],
	hp: 80,
	types: [
		"Darkness"
	],
	evolveFrom: {
		en: "Gastly"
	},
	stage: "Stage1",
	attacks: [
		{
			name: {
				en: "Spin Turn"
			},
			damage: 40,
			cost: [
				"Darkness",
				"Darkness"
			],
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon."
			}
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		}
	],
	retreat: 1,
}

export default card
