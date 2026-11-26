import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Blastoise & Suicune ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Basic Psychic Energy" },
	rarity: "None",
	category: "Energy",

	energyType: "Normal",
	types: ["Psychic"],

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 528203 }
		}
	]
}

export default card
