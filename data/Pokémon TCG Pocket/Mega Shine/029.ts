import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Hypno"
	},
	illustrator: "OOYAMA",
	rarity: "Two Diamond",
	category: "Pokemon",
	dexId: [
		97
	],
	hp: 100,
	types: [
		"Psychic"
	],
	evolveFrom: {
		en: "Drowzee"
	},
	stage: "Stage1",
	attacks: [
		{
			name: {
				en: "Hypnoblast"
			},
			damage: 60,
			cost: [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep."
			}
		}
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		}
	],
	retreat: 2,
}

export default card
