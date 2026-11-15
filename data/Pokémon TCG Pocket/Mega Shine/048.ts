import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Kartana"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
	category: "Pokemon",
	dexId: [
		798
	],
	hp: 60,
	types: [
		"Metal"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Thrash Metal"
			},
			damage: 40,
			cost: [
				"Metal"
			]
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		}
	],
	retreat: 1,
}

export default card
