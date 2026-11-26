import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Venusaur & Lugia ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Pokémon Fan Club" },
	illustrator: "Sanosuke Sakuma",
	rarity: "None",
	category: "Trainer",

	trainerType: "Supporter",
	effect: { en: "Search your deck for up to 2 Basic Pokémon, reveal them, and put them into your hand. Then, shuffle your deck." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527911 }
		}
	]
}

export default card
