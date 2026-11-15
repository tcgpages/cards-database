import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Electabuzz"
	},
	illustrator: "OKACHEKE",
	rarity: "One Diamond",
	category: "Pokemon",
	dexId: [
		125
	],
	hp: 70,
	types: [
		"Lightning"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Head Bolt"
			},
			damage: 30,
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
