import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Mega Charizard X ex"
	},
	illustrator: "PLANETA Igarashi",
	rarity: "Two Shiny",
	category: "Pokemon",
	dexId: [
		6
	],
	hp: 220,
	types: [
		"Fire"
	],
	evolveFrom: {
		en: "Charmeleon"
	},
	stage: "Stage2",
	suffix: "EX",
	attacks: [
		{
			name: {
				en: "Raging Blaze"
			},
			damage: "100+",
			cost: [
				"Fire",
				"Fire",
				"Fire"
			],
			effect: {
				en: "If this Pokémon's remaining HP is 110 or less, this attack does 80 more damage."
			}
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		}
	],
	retreat: 2,
}

export default card
