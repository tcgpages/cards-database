import { Card } from "../../../interfaces"
import Set from "../Burning Shadows"

const card: Card = {
	name: { en: "Acerola" },
	illustrator: "Hideki Ishikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Supporter",
	effect: { en: "Put 1 of your Pokémon that has any damage counters on it and all cards attached to it into your hand." },

	variants: [
		{
			type: "reverse",
			foil: "mirror",
			stamp: ["league-challenge", "1st-place"],
			thirdParty: { tcgplayer: 185133 }
		},
		{
			type: "reverse",
			foil: "mirror",
			stamp: ["league-challenge", "2nd-place"],
			thirdParty: { tcgplayer: 185134 }
		},
		{
			type: "reverse",
			foil: "mirror",
			stamp: ["league-challenge", "3rd-place"],
			thirdParty: { tcgplayer: 185135 }
		},
		{
			type: "reverse",
			foil: "mirror",
			stamp: ["league-challenge", "4th-place"],
			thirdParty: { tcgplayer: 185136 }
		}
	]
}

export default card
