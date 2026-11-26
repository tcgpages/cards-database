import { Card } from "../../../interfaces"
import Set from "../Ultra Prism"

const card: Card = {
	name: { en: "Cynthia" },
	illustrator: "Hideki Ishikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Supporter",
	effect: { en: "Shuffle your hand into your deck. Then, draw 6 cards." },

	variants: [{ type: "reverse" }]
}

export default card
