import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Empoleon"
	},
	illustrator: "kawayoo",
	rarity: "One Star",
	category: "Pokemon",
	dexId: [
		395
	],
	hp: 130,
	types: [
		"Water"
	],
	evolveFrom: {
		en: "Prinplup"
	},
	stage: "Stage2",
	attacks: [
		{
			name: {
				en: "Emperor’s Strike"
			},
			damage: "80+",
			cost: [
				"Water",
				"Water",
				"Colorless"
			],
			effect: {
				en: "If your opponent's Active Pokémon has more remaining HP than this Pokémon, this attack does 60 more damage."
			}
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		}
	],
	retreat: 1,
}

export default card
