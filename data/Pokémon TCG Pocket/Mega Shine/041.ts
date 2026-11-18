import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Trubbish"
	},
	illustrator: "kawayoo",
	rarity: "One Diamond",
	category: "Pokemon",
	dexId: [
		568
	],
	hp: 70,
	types: [
		"Darkness"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Sludge Toss"
			},
			damage: 40,
			cost: [
				"Darkness",
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
	retreat: 2,
}

export default card
