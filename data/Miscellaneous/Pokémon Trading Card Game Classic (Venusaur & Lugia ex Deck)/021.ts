import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Venusaur & Lugia ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Poké Ball" },
	illustrator: "Ryo Ueda",
	rarity: "None",
	category: "Trainer",

	trainerType: "Item",
	effect: { en: "Flip a coin. If heads, search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527910 }
		}
	]
}

export default card
