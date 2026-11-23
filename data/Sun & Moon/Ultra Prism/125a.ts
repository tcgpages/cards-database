import { Card } from "../../../interfaces"
import Set from "../Ultra Prism"

const card: Card = {
	name: { en: "Lillie" },
	illustrator: "Mana Ibe",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Supporter",
	effect: { en: "Draw cards until you have 6 cards in your hand. If it's your first turn, draw cards until you have 8 cards in your hand." },

	variants: [
		{
			type: "reverse",
			foil: "mirror",
			stamp: ["regional-championships"],
			thirdParty: { tcgplayer: 199681 }
		},
		{
			type: "reverse",
			foil: "mirror",
			stamp: ["regional-championships", "staff"],
			thirdParty: { tcgplayer: 206297 }
		}
	]
}

export default card
