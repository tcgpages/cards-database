import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Fraxure"
	},
	illustrator: "Nisota Niso",
	rarity: "One Shiny",
	category: "Pokemon",
	dexId: [
		611
	],
	hp: 90,
	types: [
		"Dragon"
	],
	evolveFrom: {
		en: "Axew"
	},
	stage: "Stage1",
	attacks: [
		{
			name: {
				en: "Dragon Claw"
			},
			damage: 60,
			cost: [
				"Fighting",
				"Metal"
			]
		}
	],
	retreat: 2,
}

export default card
