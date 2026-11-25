import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Venusaur & Lugia ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Doduo" },
	illustrator: "Naoki Saito",
	rarity: "None",
	category: "Pokemon",

	dexId: [84],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Double Stab" },
			damage: "10×",
			effect: { en: "Flip 2 coins. This attack does 10 damage for each heads." }
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { en: "Doduo Delivery" },
			effect: { en: "Draw 2 cards." }
		}
	],

	weaknesses: [{ type: "Lightning", value: "×2" }],
	resistances: [{ type: "Fighting", value: "-20" }],
	retreat: 1,
	description: { en: "The brains in its two heads appear to communicate emotions to each other with a telepathic power." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527900 }
		}
	]
}

export default card
