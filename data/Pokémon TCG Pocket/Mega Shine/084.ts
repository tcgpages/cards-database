import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Mega Manectric ex"
	},
	illustrator: "GOSSAN",
	rarity: "Two Star",
	category: "Pokemon",
	dexId: [
		310
	],
	hp: 180,
	types: [
		"Lightning"
	],
	evolveFrom: {
		en: "Electrike"
	},
	stage: "Stage1",
	suffix: "EX",
	attacks: [
		{
			name: {
				en: "Lightning Accelerator"
			},
			damage: "80+",
			cost: [
				"Lightning",
				"Lightning"
			],
			effect: {
				en: "This attack does 30 more damage for each point you have gotten."
			}
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		}
	],
	retreat: 0,
}

export default card
