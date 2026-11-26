import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Garbodor"
	},
	illustrator: "sui",
	rarity: "One Diamond",
	category: "Pokemon",
	dexId: [
		569
	],
	hp: 120,
	types: [
		"Darkness"
	],
	evolveFrom: {
		en: "Trubbish"
	},
	stage: "Stage1",
	attacks: [
		{
			name: {
				en: "Sludge Whirlpool"
			},
			damage: 70,
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
	retreat: 3,
}

export default card
