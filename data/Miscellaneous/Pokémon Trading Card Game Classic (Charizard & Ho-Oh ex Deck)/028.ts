import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Charizard & Ho-Oh ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Super Scoop Up" },
	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Trainer",

	trainerType: "Item",
	effect: { en: "Flip a coin. If heads, put 1 of your Pokémon and all attached cards into your hand." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 528028 }
		}
	]
}

export default card
