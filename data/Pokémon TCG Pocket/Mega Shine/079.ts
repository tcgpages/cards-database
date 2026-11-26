import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Mega Gengar ex"
	},
	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",
	dexId: [
		94
	],
	hp: 210,
	types: [
		"Darkness"
	],
	evolveFrom: {
		en: "Haunter"
	},
	stage: "Stage2",
	suffix: "EX",
	attacks: [
		{
			name: {
				en: "Labyrinth of Shadows"
			},
			damage: 120,
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Colorless"
			],
			effect: {
				en: "During your opponent's next turn, they can't play any Trainer cards from their hand."
			}
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
