import { Card } from "../../../interfaces"
import Set from "../Celestial Storm"

const card: Card = {
	name: { en: "Acro Bike" },
	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Item",
	effect: { en: "Look at the top 2 cards of your deck and put 1 of them into your hand. Discard the other card." },

	variants: [{ type: "reverse", foil: "mirror", stamp: ["pokemon-league"] }],
	thirdParty: { tcgplayer: 202639 }
}

export default card
