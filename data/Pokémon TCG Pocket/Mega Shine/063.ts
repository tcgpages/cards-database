import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Cinccino"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",
	dexId: [
		573
	],
	hp: 90,
	types: [
		"Colorless"
	],
	evolveFrom: {
		en: "Minccino"
	},
	stage: "Stage1",
	attacks: [
		{
			name: {
				en: "Gentle Slap"
			},
			damage: 60,
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
	retreat: 1,
}

export default card
