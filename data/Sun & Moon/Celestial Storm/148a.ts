import { Card } from "../../../interfaces"
import Set from "../Celestial Storm"

const card: Card = {
	name: { en: "Tate & Liza" },
	illustrator: "You Iribi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Supporter",
	effect: { en: "Choose 1:\n• Shuffle your hand into your deck then draw 5 cards.\n• Switch your Active Pokémon with 1 of your Benched Pokémon." },

	variants: [{ type: "normal" }],
	thirdParty: { tcgplayer: 200203 }
}

export default card
