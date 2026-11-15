import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Chatot"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",
	dexId: [
		441
	],
	hp: 70,
	types: [
		"Colorless"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Spinning Draw"
			},
			damage: 10,
			cost: [
				"Colorless"
			],
			effect: {
				en: "Draw a card."
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
