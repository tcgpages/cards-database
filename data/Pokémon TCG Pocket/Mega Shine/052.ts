import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Dragonair"
	},
	illustrator: "Kouki Saitou",
	rarity: "Two Diamond",
	category: "Pokemon",
	dexId: [
		148
	],
	hp: 80,
	types: [
		"Dragon"
	],
	evolveFrom: {
		en: "Dratini"
	},
	stage: "Stage1",
	attacks: [
		{
			name: {
				en: "Sky’s Blessing"
			},
			cost: [
				"Colorless"
			],
			effect: {
				en: "Take a {W} and a {L} Energy from your Energy Zone and attach them to this Pokémon."
			}
		}
	],
	retreat: 1,
}

export default card
