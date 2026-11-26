import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Blastoise & Suicune ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "VS Seeker" },
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Trainer",

	trainerType: "Item",
	effect: { en: "Put a Supporter card from your discard pile into your hand." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 528200 }
		}
	]
}

export default card
