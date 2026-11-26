import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Blastoise & Suicune ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Fisherman" },
	illustrator: "Hitoshi Ariga",
	rarity: "None",
	category: "Trainer",

	trainerType: "Supporter",
	effect: { en: "Put up to 4 Basic Energy cards from your discard pile into your hand." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 528027 }
		}
	]
}

export default card
