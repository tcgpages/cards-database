import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Venusaur & Lugia ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Chansey" },
	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",

	dexId: [113],
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",
	level: 55,

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { en: "Scrunch" },
			effect: { en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage done to this Pokémon by attacks." }
		},
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: { en: "Double-Edge" },
			damage: 80,
			effect: { en: "This Pokémon also does 80 damage to itself." }
		}
	],

	weaknesses: [{ type: "Fighting", value: "×2" }],
	resistances: [{ type: "Psychic", value: "-30" }],
	retreat: 1,
	description: { en: "A rare and elusive Pokémon that is said to bring happiness to those who manage to catch it." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527902 }
		}
	]
}

export default card
