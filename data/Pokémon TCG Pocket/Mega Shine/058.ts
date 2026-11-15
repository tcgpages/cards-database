import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Jigglypuff"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",
	dexId: [
		39
	],
	hp: 70,
	types: [
		"Colorless"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Stampede"
			},
			damage: 30,
			cost: [
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
