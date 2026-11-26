import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Blastoise & Suicune ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Basic Water Energy" },
	rarity: "None",
	category: "Energy",

	energyType: "Normal",
	types: ["Water"],

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 528201 }
		}
	]
}

export default card
