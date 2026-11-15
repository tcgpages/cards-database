import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Prinplup"
	},
	illustrator: "Suwama Chiaki",
	rarity: "Two Diamond",
	category: "Pokemon",
	dexId: [
		394
	],
	hp: 80,
	types: [
		"Water"
	],
	evolveFrom: {
		en: "Piplup"
	},
	stage: "Stage1",
	attacks: [
		{
			name: {
				en: "Water Splash"
			},
			damage: "30+",
			cost: [
				"Water",
				"Colorless"
			],
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage."
			}
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		}
	],
	retreat: 1,
}

export default card
