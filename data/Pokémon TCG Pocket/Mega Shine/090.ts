import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Trevenant"
	},
	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",
	dexId: [
		709
	],
	hp: 120,
	types: [
		"Grass"
	],
	evolveFrom: {
		en: "Phantump"
	},
	stage: "Stage1",
	attacks: [
		{
			name: {
				en: "Rumble Stomp"
			},
			damage: "40+",
			cost: [
				"Grass",
				"Colorless"
			],
			effect: {
				en: "Flip a coin until you get tails. This attack does 40 more damage for each heads."
			}
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		}
	],
	retreat: 3,
}

export default card
