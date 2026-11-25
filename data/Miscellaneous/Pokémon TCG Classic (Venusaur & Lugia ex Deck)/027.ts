import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Venusaur & Lugia ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Sun Seed" },
	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Trainer",

	trainerType: "Tool",
	effect: { en: "The attacks used by the Venusaur this card is attached to do 100 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance)." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527918 }
		}
	]
}

export default card
