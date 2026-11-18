import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Drowzee"
	},
	illustrator: "Souichirou Gunjima",
	rarity: "One Diamond",
	category: "Pokemon",
	dexId: [
		96
	],
	hp: 60,
	types: [
		"Psychic"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Hypnosis"
			},
			cost: [
				"Colorless"
			],
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep."
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
