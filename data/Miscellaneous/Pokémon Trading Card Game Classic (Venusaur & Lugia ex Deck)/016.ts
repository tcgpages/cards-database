import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Venusaur & Lugia ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Snorlax" },
	illustrator: "Eri Yamaki",
	rarity: "None",
	category: "Pokemon",

	dexId: [143],
	hp: 150,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Collect" },
			effect: { en: "Draw 2 cards." }
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { en: "Collapse" },
			damage: 120,
			effect: { en: "This Pokémon is now Asleep." }
		}
	],

	weaknesses: [{ type: "Fighting", value: "×2" }],
	retreat: 4,
	description: { en: "It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527903 }
		}
	]
}

export default card
