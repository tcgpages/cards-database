import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Phantump"
	},
	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",
	dexId: [
		708
	],
	hp: 70,
	types: [
		"Grass"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Tackle"
			},
			damage: 10,
			cost: [
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		}
	],
	retreat: 1,
}

export default card
