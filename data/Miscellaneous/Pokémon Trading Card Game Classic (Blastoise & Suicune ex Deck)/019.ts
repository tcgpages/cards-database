import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Blastoise & Suicune ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Boss's Orders" },
	illustrator: "nagimiso",
	rarity: "None",
	category: "Trainer",

	trainerType: "Supporter",
	effect: { en: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 528015 }
		}
	]
}

export default card
