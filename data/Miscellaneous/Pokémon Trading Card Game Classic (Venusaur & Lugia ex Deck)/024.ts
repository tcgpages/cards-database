import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Venusaur & Lugia ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Professor Oak" },
	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Trainer",

	trainerType: "Supporter",
	effect: { en: "Discard your hand and draw 7 cards." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527913 }
		}
	]
}

export default card
