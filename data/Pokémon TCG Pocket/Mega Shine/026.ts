import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Electrike"
	},
	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",
	dexId: [
		309
	],
	hp: 60,
	types: [
		"Lightning"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Quick Attack"
			},
			damage: "10+",
			cost: [
				"Lightning"
			],
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage."
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
