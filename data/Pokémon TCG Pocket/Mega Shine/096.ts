import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Pikachu"
	},
	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",
	dexId: [
		25
	],
	hp: 70,
	types: [
		"Lightning"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Static Shock"
			},
			damage: 10,
			cost: [
				"Lightning"
			]
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
