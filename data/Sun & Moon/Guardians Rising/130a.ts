import { Card } from "../../../interfaces"
import Set from "../Guardians Rising"

const card: Card = {
	name: { en: "Rescue Stretcher" },
	illustrator: "Yoshinobu Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Item",
	effect: { en: "Choose 1:\n• Put a Pokémon from your discard pile into your hand.\n• Shuffle 3 Pokémon from your discard pile into your deck." },

	variants: [{ type: "reverse" }],
	thirdParty: { tcgplayer: 190380 }
}

export default card
