import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Blastoise & Suicune ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Super Rod" },
	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Trainer",

	trainerType: "Item",
	effect: { en: "Shuffle up to 3 in any combination of Pokémon and Basic Energy cards from your discard pile into your deck." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 528023 }
		}
	]
}

export default card
