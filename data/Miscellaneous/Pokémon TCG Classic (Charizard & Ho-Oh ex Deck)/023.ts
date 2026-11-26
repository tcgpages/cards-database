import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Charizard & Ho-Oh ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Professor Oak" },
	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Trainer",

	trainerType: "Supporter",
	effect: { en: "Discard your hand and draw 7 cards." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527960 }
		}
	]
}

export default card
