import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Wigglytuff"
	},
	illustrator: "Asako Ito",
	rarity: "One Diamond",
	category: "Pokemon",
	dexId: [
		40
	],
	hp: 110,
	types: [
		"Colorless"
	],
	evolveFrom: {
		en: "Jigglypuff"
	},
	stage: "Stage1",
	attacks: [
		{
			name: {
				en: "Hammer In"
			},
			damage: 80,
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
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
