import { Card } from "../../../interfaces"
import Set from "../Forbidden Light"

const card: Card = {
	name: { en: "Mysterious Treasure" },
	illustrator: "Eske Yoshinob",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Item",
	effect: { en: "Discard a card from your hand. If you do, search your deck for a Psychic or Dragon Pokémon, reveal it, and put it into your hand. Then, shuffle your deck." },

	variants: [{ type: "reverse", foil: "mirror", stamp: ["pokemon-league"] }],
	thirdParty: { tcgplayer: 198227 }
}

export default card
