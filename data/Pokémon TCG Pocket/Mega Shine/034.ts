import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Dugtrio"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Two Diamond",
	category: "Pokemon",
	dexId: [
		51
	],
	hp: 80,
	types: [
		"Fighting"
	],
	evolveFrom: {
		en: "Diglett"
	},
	stage: "Stage1",
	attacks: [
		{
			name: {
				en: "Mud Bomb"
			},
			damage: 60,
			cost: [
				"Fighting",
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		}
	],
	retreat: 0,
}

export default card
