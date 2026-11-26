import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Blastoise & Suicune ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Drops in the Ocean" },
	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Trainer",

	trainerType: "Tool",
	effect: { en: "The attacks used by the Blastoise this card is attached to do 100 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance)." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 528026 }
		}
	]
}

export default card
