import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Zorua"
	},
	illustrator: "nagimiso",
	rarity: "One Diamond",
	category: "Pokemon",
	dexId: [
		570
	],
	hp: 60,
	types: [
		"Darkness"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Surprise Attack"
			},
			damage: 40,
			cost: [
				"Darkness"
			],
			effect: {
				en: "Flip a coin. If tails, this attack does nothing."
			}
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		}
	],
	retreat: 1,
}

export default card
