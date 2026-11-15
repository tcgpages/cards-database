import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Raichu"
	},
	illustrator: "Megumi Mizutani",
	rarity: "Two Diamond",
	category: "Pokemon",
	dexId: [
		26
	],
	hp: 100,
	types: [
		"Lightning"
	],
	evolveFrom: {
		en: "Pikachu"
	},
	stage: "Stage1",
	attacks: [
		{
			name: {
				en: "Thunder"
			},
			damage: 90,
			cost: [
				"Lightning",
				"Lightning"
			],
			effect: {
				en: "This Pokémon also does 30 damage to itself."
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
