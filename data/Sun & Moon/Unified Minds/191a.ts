import { Card } from "../../../interfaces"
import Set from "../Unified Minds"

const card: Card = {
	name: { en: "Cherish Ball" },
	illustrator: "Yoshinobu Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Item",
	effect: { en: "Search your deck for a Pokémon-GX, reveal it, and put it into your hand. Then, shuffle your deck." },

	variants: [
		{ type: "reverse", foil: "mirror", stamp: ["league-cup"], thirdParty: { tcgplayer: 205311 } },
		{
			type: "reverse",
			foil: "mirror",
			stamp: ["league-cup", "staff"],
			thirdParty: { tcgplayer: 205312 }
		}
	]
}

export default card
