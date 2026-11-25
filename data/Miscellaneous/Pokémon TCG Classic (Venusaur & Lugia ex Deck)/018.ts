import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Venusaur & Lugia ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Bill" },
	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Trainer",

	trainerType: "Supporter",
	effect: { en: "Draw 2 cards." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527907 }
		}
	]
}

export default card
