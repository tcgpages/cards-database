import { Card } from "../../../interfaces"
import Set from "../Ultra Prism"

const card: Card = {
	name: { en: "Lusamine" },
	illustrator: "Mana Ibe",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Supporter",
	effect: { en: "Put 2 in any combination of Supporter and Stadium cards from your discard pile into your hand." },

	variants: [
		{
			type: "reverse",
			foil: "mirror",
			stamp: ["league-challenge", "1st-place"],
			thirdParty: { tcgplayer: 198228 }
		},
		{
			type: "reverse",
			foil: "mirror",
			stamp: ["league-challenge", "2nd-place"],
			thirdParty: { tcgplayer: 198229 }
		},
		{
			type: "reverse",
			foil: "mirror",
			stamp: ["league-challenge", "3rd-place"],
			thirdParty: { tcgplayer: 198230 }
		},
		{
			type: "reverse",
			foil: "mirror",
			stamp: ["league-challenge", "4th-place"],
			thirdParty: { tcgplayer: 198231 }
		}
	]
}

export default card
