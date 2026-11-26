import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Venusaur & Lugia ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Basic Grass Energy" },
	rarity: "None",
	category: "Energy",

	energyType: "Normal",
	types: ["Grass"],

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527924 }
		}
	]
}

export default card
