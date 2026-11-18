import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Charmander"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "One Diamond",
	category: "Pokemon",
	dexId: [
		4
	],
	hp: 70,
	types: [
		"Fire"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Flame Tail"
			},
			damage: 30,
			cost: [
				"Fire",
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		}
	],
	retreat: 1,
}

export default card
