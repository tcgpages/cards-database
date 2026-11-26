import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Venusaur & Lugia ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Computer Search" },
	illustrator: "Keiji Kinebuchi",
	rarity: "None",
	category: "Trainer",

	trainerType: "Item",
	effect: { en: "You can use this card only if you discard 2 other cards from your hand. Search your deck for a card and put it into your hand. Then, shuffle your deck." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527909 }
		}
	]
}

export default card
