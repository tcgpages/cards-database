import { Card } from "../../../interfaces"
import Set from "../Guardians Rising"

const card: Card = {
	name: { en: "Choice Band" },
	illustrator: "Eske Yoshinob",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Tool",
	effect: { en: "The attacks of the Pokémon this card is attached to do 30 more damage to your opponent's Active Pokémon-GX or Active Pokémon-EX (before applying Weakness and Resistance)." },

	variants: [
		{
			type: "reverse",
			foil: "mirror",
			stamp: ["international-championship-north-america"],
			thirdParty: { tcgplayer: 247301 }
		},
		{
			type: "reverse",
			foil: "mirror",
			stamp: ["international-championship-north-america", "staff"],
			thirdParty: { tcgplayer: 247303 }
		},
		{
			type: "reverse",
			foil: "mirror",
			stamp: ["international-championship-north-america", "top-eight"]
		},
		{
			type: "reverse",
			foil: "mirror",
			stamp: ["international-championship-north-america", "champion"]
		},
		{
			type: "reverse",
			foil: "mirror",
			stamp: ["international-championship-oceania"],
			thirdParty: { tcgplayer: 247302 }
		},
		{ type: "reverse", foil: "mirror", stamp: ["international-championship-oceania", "staff"] },
		{ type: "reverse", foil: "mirror", stamp: ["international-championship-oceania", "top-eight"] },
		{ type: "reverse", foil: "mirror", stamp: ["international-championship-oceania", "champion"] }
	]
}

export default card
