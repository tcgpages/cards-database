import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Pineco"
	},
	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",
	dexId: [
		204
	],
	hp: 60,
	types: [
		"Grass"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Hang Down"
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
