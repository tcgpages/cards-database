import { Card } from "../../../interfaces"
import Set from "../Ultra Prism"

const card: Card = {
	name: { en: "Cynthia" },
	illustrator: "Hideki Ishikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Supporter",
	effect: { en: "Shuffle your hand into your deck. Then, draw 6 cards." },

	variants: [
		{
			type: "reverse",
			foil: "mirror",
			stamp: ["regional-championships"],
			thirdParty: { tcgplayer: 198218 }
		},
		{
			type: "reverse",
			foil: "mirror",
			stamp: ["regional-championships", "staff"],
			thirdParty: { tcgplayer: 198219 }
		}
	]
}

export default card
