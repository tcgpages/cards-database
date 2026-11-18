import { Card } from "../../../interfaces"
import Set from "../Lost Thunder"

const card: Card = {
	name: { en: "Professor Elm's Lecture" },
	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Supporter",
	effect: { en: "Search your deck for up to 3 Pokémon with 60 HP or less, reveal them, and put them into your hand. Then, shuffle your deck." },

	variants: [{ type: "reverse" }]
}

export default card
