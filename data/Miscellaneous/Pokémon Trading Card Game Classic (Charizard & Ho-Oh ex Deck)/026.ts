import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Charizard & Ho-Oh ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Scorching Charcoal" },
	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Trainer",

	trainerType: "Tool",
	effect: { en: "The attacks used by the Charizard this card is attached to do 100 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance)." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527972 }
		}
	]
}

export default card
