import { Card } from "../../../interfaces"
import Set from "../Ultra Prism"

const card: Card = {
	name: { en: "Volkner" },
	illustrator: "Hideki Ishikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Supporter",
	effect: { en: "Search your deck for an Item card and a Lightning Energy card, reveal them, and put them into your hand. Then, shuffle your deck." },

	variants: [
		{
			type: "reverse",
			foil: "mirror",
			stamp: ["league-challenge", "1st-place"],
			thirdParty: { tcgplayer: 189780 }
		},
		{
			type: "reverse",
			foil: "mirror",
			stamp: ["league-challenge", "2nd-place"],
			thirdParty: { tcgplayer: 189781 }
		},
		{
			type: "reverse",
			foil: "mirror",
			stamp: ["league-challenge", "3rd-place"],
			thirdParty: { tcgplayer: 189782 }
		},
		{
			type: "reverse",
			foil: "mirror",
			stamp: ["league-challenge", "4th-place"],
			thirdParty: { tcgplayer: 189783 }
		}
	]
}

export default card
