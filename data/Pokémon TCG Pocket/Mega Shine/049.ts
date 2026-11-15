import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Varoom"
	},
	illustrator: "Saya Tsuruta",
	rarity: "One Diamond",
	category: "Pokemon",
	dexId: [
		965
	],
	hp: 70,
	types: [
		"Metal"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Suffocating Gas"
			},
			damage: 40,
			cost: [
				"Metal",
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		}
	],
	retreat: 2,
}

export default card
