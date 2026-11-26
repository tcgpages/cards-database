import { Card } from "../../../interfaces"
import Set from "../Ultra Prism"

const card: Card = {
	name: { en: "Volkner" },
	illustrator: "Hideki Ishikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Supporter",
	effect: { en: "Search your deck for an Item card and a Lightning Energy card, reveal them, and put them into your hand. Then, shuffle your deck." },

	variants: [{ type: "reverse" }]
}

export default card
