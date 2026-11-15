import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Miltank"
	},
	illustrator: "Yuu Nishida",
	rarity: "One Star",
	category: "Pokemon",
	dexId: [
		241
	],
	hp: 110,
	types: [
		"Colorless"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Rout"
			},
			damage: "10+",
			cost: [
				"Colorless",
				"Colorless"
			],
			effect: {
				en: "This attack does 20 more damage for each of your opponent's Benched Pokémon."
			}
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		}
	],
	retreat: 2,
}

export default card
