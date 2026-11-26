import { Card } from "../../../interfaces"
import Set from "../Burning Shadows"

const card: Card = {
	name: { en: "Guzma" },
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Supporter",
	effect: { en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. If you do, switch your Active Pokémon with 1 of your Benched Pokémon." },

	variants: [{ type: "reverse" }]
}

export default card
