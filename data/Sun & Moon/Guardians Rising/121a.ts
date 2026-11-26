import { Card } from "../../../interfaces"
import Set from "../Guardians Rising"

const card: Card = {
	name: { en: "Choice Band" },
	illustrator: "Eske Yoshinob",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Tool",
	effect: { en: "The attacks of the Pokémon this card is attached to do 30 more damage to your opponent's Active Pokémon-GX or Active Pokémon-EX (before applying Weakness and Resistance)." },

	variants: [{ type: "reverse" }]
}

export default card
