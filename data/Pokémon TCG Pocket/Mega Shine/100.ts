import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Gastly"
	},
	illustrator: "Shigenori Negishi",
	rarity: "One Shiny",
	category: "Pokemon",
	dexId: [
		92
	],
	hp: 60,
	types: [
		"Darkness"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Mumble"
			},
			damage: 20,
			cost: [
				"Darkness"
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
