import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Venusaur & Lugia ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Bulbasaur" },
	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",

	dexId: [1],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",
	level: 13,

	attacks: [
		{
			cost: ["Grass", "Grass"],
			name: { en: "Leech Seed" },
			damage: 20,
			effect: { en: "Heal 10 damage from this Pokémon." }
		}
	],

	weaknesses: [{ type: "Fire", value: "×2" }],
	retreat: 1,
	description: { en: "A strange seed was planted on its back at birth. Thus, a plant sprouted and now grows with this Pokémon." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527883 }
		}
	]
}

export default card
