import { Card } from "../../../interfaces"
import Set from "../Lost Thunder"

const card: Card = {
	name: { en: "Net Ball" },
	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Item",
	effect: { en: "Search your deck for a Basic Grass Pokémon or a Grass Energy card, reveal it, and put it into your hand. Then, shuffle your deck." },

	variants: [{ type: "reverse" }],
	thirdParty: { tcgplayer: 199679 }
}

export default card
