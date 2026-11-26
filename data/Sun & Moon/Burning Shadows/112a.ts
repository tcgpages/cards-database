import { Card } from "../../../interfaces"
import Set from "../Burning Shadows"

const card: Card = {
	name: { en: "Acerola" },
	illustrator: "Hideki Ishikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Supporter",
	effect: { en: "Put 1 of your Pokémon that has any damage counters on it and all cards attached to it into your hand." },

	variants: [{ type: "reverse" }]
}

export default card
