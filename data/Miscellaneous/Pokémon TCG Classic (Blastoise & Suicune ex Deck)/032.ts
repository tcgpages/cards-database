import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Blastoise & Suicune ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Double Colorless Energy" },
	illustrator: "Keiji Kinebuchi",
	rarity: "None",
	category: "Energy",

	energyType: "Special",
	effect: { en: "As long as this card is attached to a Pokémon, it provides 2 Colorless Energy." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 528017 }
		}
	]
}

export default card
