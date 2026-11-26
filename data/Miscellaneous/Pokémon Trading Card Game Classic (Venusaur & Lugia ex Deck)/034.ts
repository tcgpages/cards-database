import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Venusaur & Lugia ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Basic Fighting Energy" },
	rarity: "None",
	category: "Energy",

	energyType: "Normal",
	types: ["Fighting"],

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527925 }
		}
	]
}

export default card
