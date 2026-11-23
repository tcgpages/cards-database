import { Card } from "../../../interfaces"
import Set from "../Forbidden Light"

const card: Card = {
	name: { en: "Beast Ring" },
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	trainerType: "Item",
	effect: { en: "You can play this card only if your opponent has exactly 3 or 4 Prize cards remaining.\nSearch your deck for up to 2 basic Energy cards and attach them to 1 of your Ultra Beasts. Then, shuffle your deck." },

	variants: [
		{ type: "reverse", foil: "mirror", stamp: ["league-cup"], thirdParty: { tcgplayer: 191904 } },
		{
			type: "reverse",
			foil: "mirror",
			stamp: ["league-cup", "staff"],
			thirdParty: { tcgplayer: 191905 }
		}
	]
}

export default card
