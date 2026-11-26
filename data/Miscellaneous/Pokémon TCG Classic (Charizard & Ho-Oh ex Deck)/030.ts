import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Charizard & Ho-Oh ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Ultra Ball" },
	illustrator: "sadaji",
	rarity: "None",
	category: "Trainer",

	trainerType: "Item",
	effect: { en: "You can use this card only if you discard 2 other cards from your hand. Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527970 }
		}
	]
}

export default card
