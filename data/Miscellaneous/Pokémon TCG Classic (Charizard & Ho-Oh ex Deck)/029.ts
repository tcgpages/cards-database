import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Charizard & Ho-Oh ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Switch" },
	illustrator: "Studio Bora Inc.",
	rarity: "None",
	category: "Trainer",

	trainerType: "Item",
	effect: { en: "Switch your Active Pokémon with 1 of your Benched Pokémon." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527968 }
		}
	]
}

export default card
