import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Piplup"
	},
	illustrator: "Shibuzoh.",
	rarity: "One Diamond",
	category: "Pokemon",
	dexId: [
		393
	],
	hp: 60,
	types: [
		"Water"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Water Gun"
			},
			damage: 20,
			cost: [
				"Water"
			]
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
