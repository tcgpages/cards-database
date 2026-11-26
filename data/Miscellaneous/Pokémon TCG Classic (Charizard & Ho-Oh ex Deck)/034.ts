import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Charizard & Ho-Oh ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Basic Lightning Energy" },
	rarity: "None",
	category: "Energy",

	energyType: "Normal",
	types: ["Lightning"],

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527984 }
		}
	]
}

export default card
