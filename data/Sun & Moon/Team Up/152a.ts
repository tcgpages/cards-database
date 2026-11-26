import { Card } from "../../../interfaces"
import Set from "../Team Up"

const card: Card = {
	name: { en: "Pokémon Communication" },
	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Item",
	effect: { en: "Reveal a Pokémon from your hand and put it into your deck. If you do, search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck." },

	variants: [{ type: "reverse" }]
}

export default card
