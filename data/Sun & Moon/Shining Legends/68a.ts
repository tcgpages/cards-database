import { Card } from "../../../interfaces"
import Set from "../Shining Legends"

const card: Card = {
	name: { en: "Ultra Ball" },
	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Item",
	effect: { en: "Discard 2 cards from your hand. If you do, search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck." },

	variants: [{ type: "reverse" }]
}

export default card
