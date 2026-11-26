import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Druddigon"
	},
	illustrator: "kawayoo",
	rarity: "One Diamond",
	category: "Pokemon",
	dexId: [
		621
	],
	hp: 100,
	types: [
		"Dragon"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Clutch"
			},
			damage: 40,
			cost: [
				"Colorless",
				"Colorless"
			],
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon can't retreat."
			}
		}
	],
	retreat: 2,
}

export default card
