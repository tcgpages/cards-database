import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Rapidash"
	},
	illustrator: "Lee HyunJung",
	rarity: "One Diamond",
	category: "Pokemon",
	dexId: [
		78
	],
	hp: 100,
	types: [
		"Fire"
	],
	evolveFrom: {
		en: "Ponyta"
	},
	stage: "Stage1",
	attacks: [
		{
			name: {
				en: "Overdrive Smash"
			},
			damage: 30,
			cost: [
				"Fire"
			],
			effect: {
				en: "During your next turn, this Pokémon's Overdrive Smash attack does +30 damage."
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
