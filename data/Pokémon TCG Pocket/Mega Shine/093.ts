import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Ponyta"
	},
	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	dexId: [
		77
	],
	hp: 60,
	types: [
		"Fire"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Singe"
			},
			cost: [
				"Fire"
			],
			effect: {
				en: "Your opponent's Active Pokémon is now Burned."
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
