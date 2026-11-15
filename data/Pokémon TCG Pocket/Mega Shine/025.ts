import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Electivire"
	},
	illustrator: "AKIRA EGAWA",
	rarity: "Two Diamond",
	category: "Pokemon",
	dexId: [
		466
	],
	hp: 130,
	types: [
		"Lightning"
	],
	evolveFrom: {
		en: "Electabuzz"
	},
	stage: "Stage1",
	attacks: [
		{
			name: {
				en: "Incendiary Thunder"
			},
			damage: "50+",
			cost: [
				"Lightning",
				"Colorless"
			],
			effect: {
				en: "If Magmortar is on your Bench, this attack does 70 more damage."
			}
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		}
	],
	retreat: 3,
}

export default card
