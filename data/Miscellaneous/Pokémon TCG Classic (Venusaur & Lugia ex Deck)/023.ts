import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Venusaur & Lugia ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Pokémon Nurse" },
	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Trainer",

	trainerType: "Supporter",
	effect: { en: "Heal all damage from 1 of your Pokémon. If you healed any damage in this way, discard all Energy from that Pokémon." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527912 }
		}
	]
}

export default card
