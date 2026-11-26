import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Blastoise & Suicune ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Rocket's Admin." },
	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Trainer",

	trainerType: "Supporter",
	effect: { en: "Each player shuffles their hand into their deck. Then, each player draws a card for each of their remaining Prize cards." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 528022 }
		}
	]
}

export default card
