import { Card } from "../../../interfaces"
import Set from "../Forbidden Light"

const card: Card = {
	name: { en: "Metal Frying Pan" },
	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Tool",
	effect: { en: "The Metal Pokémon this card is attached to takes 30 less damage from your opponent's attacks (after applying Weakness and Resistance) and has no Weakness." },

	variants: [{ type: "reverse" }],
	thirdParty: { tcgplayer: 189779 }
}

export default card
