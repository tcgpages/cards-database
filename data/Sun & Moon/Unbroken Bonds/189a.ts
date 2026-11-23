import { Card } from "../../../interfaces"
import Set from "../Unbroken Bonds"

const card: Card = {
	name: { en: "Welder" },
	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Supporter",
	effect: { en: "Attach up to 2 Fire Energy cards from your hand to 1 of your Pokémon. If you do, draw 3 cards." },

	variants: [
		{
			type: "reverse",
			foil: "mirror",
			stamp: ["regional-championships"],
			thirdParty: { tcgplayer: 205392 }
		},
		{
			type: "reverse",
			foil: "mirror",
			stamp: ["regional-championships", "staff"],
			thirdParty: { tcgplayer: 205393 }
		}
	]
}

export default card
