import { Card } from "../../../interfaces"
import Set from "../McDonald's Collection 2026"

const card: Card = {
	set: Set,
	name: { en: "Pikachu" },
	illustrator: "kodama",
	rarity: "None",
	category: "Pokemon",

	dexId: [25],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning"],
			name: { en: "Random Spark" },
			effect: { en: "This attack does 10 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
		}
	],

	weaknesses: [{ type: "Fighting", value: "×2" }],
	retreat: 1,
	description: { en: "When several of these Pokémon gather, their electricity can build and cause lightning storms." },
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 730419 }
		}
	]
}

export default card
