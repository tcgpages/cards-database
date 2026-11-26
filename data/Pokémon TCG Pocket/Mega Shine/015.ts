import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Slowpoke"
	},
	illustrator: "Narumi Sato",
	rarity: "One Diamond",
	category: "Pokemon",
	dexId: [
		79
	],
	hp: 70,
	types: [
		"Water"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Headbutt"
			},
			damage: 30,
			cost: [
				"Water",
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		}
	],
	retreat: 2,
}

export default card
