import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Magmar"
	},
	illustrator: "Yukiko Baba",
	rarity: "One Diamond",
	category: "Pokemon",
	dexId: [
		126
	],
	hp: 80,
	types: [
		"Fire"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Tail Whap"
			},
			damage: 30,
			cost: [
				"Colorless",
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
