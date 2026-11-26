import { Card } from "../../../interfaces"
import Set from "../Ultra Prism"

const card: Card = {
	name: { en: "Lillie" },
	illustrator: "Mana Ibe",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Supporter",
	effect: { en: "Draw cards until you have 6 cards in your hand. If it's your first turn, draw cards until you have 8 cards in your hand." },

	variants: [{ type: "reverse" }]
}

export default card
