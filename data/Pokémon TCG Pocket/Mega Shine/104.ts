import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Forretress"
	},
	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",
	dexId: [
		205
	],
	hp: 100,
	types: [
		"Metal"
	],
	evolveFrom: {
		en: "Pineco"
	},
	stage: "Stage1",
	attacks: [
		{
			name: {
				en: "Enormous Explosion"
			},
			damage: 100,
			cost: [
				"Metal",
				"Metal",
				"Metal"
			],
			effect: {
				en: "This Pokémon also does 100 damage to itself and 50 damage to all Benched Pokémon (both yours and your opponent's)."
			}
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		}
	],
	retreat: 3,
}

export default card
