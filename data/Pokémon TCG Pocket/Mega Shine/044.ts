import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Zoroark"
	},
	illustrator: "Misa Tsutsui",
	rarity: "Three Diamond",
	category: "Pokemon",
	dexId: [
		571
	],
	hp: 100,
	types: [
		"Darkness"
	],
	evolveFrom: {
		en: "Zorua"
	},
	stage: "Stage1",
	attacks: [
		{
			name: {
				en: "Energy Crush"
			},
			damage: "20x",
			cost: [
				"Darkness"
			],
			effect: {
				en: "This attack does 20 damage for each Energy attached to all of your opponent's Pokémon."
			}
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		}
	],
	retreat: 1,
}

export default card
