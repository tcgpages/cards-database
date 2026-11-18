import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Dragonite"
	},
	illustrator: "Kouki Saitou",
	rarity: "Three Diamond",
	category: "Pokemon",
	dexId: [
		149
	],
	hp: 150,
	types: [
		"Dragon"
	],
	evolveFrom: {
		en: "Dragonair"
	},
	stage: "Stage2",
	attacks: [
		{
			name: {
				en: "Dragon Wave"
			},
			damage: 150,
			cost: [
				"Water",
				"Lightning",
				"Colorless"
			],
			effect: {
				en: "Discard a {W} and a {L} Energy from this Pokémon."
			}
		}
	],
	retreat: 3,
}

export default card
