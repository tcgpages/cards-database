import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Spoink"
	},
	illustrator: "MAHOU",
	rarity: "One Diamond",
	category: "Pokemon",
	dexId: [
		325
	],
	hp: 60,
	types: [
		"Psychic"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Psyshot"
			},
			damage: 20,
			cost: [
				"Psychic"
			]
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
