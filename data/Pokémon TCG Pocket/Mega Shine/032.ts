import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Grumpig"
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Two Diamond",
	category: "Pokemon",
	dexId: [
		326
	],
	hp: 110,
	types: [
		"Psychic"
	],
	evolveFrom: {
		en: "Spoink"
	},
	stage: "Stage1",
	attacks: [
		{
			name: {
				en: "Swaying Dance"
			},
			damage: "40+",
			cost: [
				"Psychic"
			],
			effect: {
				en: "If your opponent has exactly 2, 4, or 6 cards in their hand, this attack does 40 more damage."
			}
		}
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		}
	],
	retreat: 3,
}

export default card
