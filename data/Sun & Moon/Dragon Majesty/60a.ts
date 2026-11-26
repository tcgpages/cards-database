import { Card } from "../../../interfaces"
import Set from "../Dragon Majesty"

const card: Card = {
	name: { en: "Fiery Flint" },
	illustrator: "Yoshinobu Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Item",
	effect: { en: "You can play this card only if you discard 2 other cards from your hand.\nSearch your deck for up to 4 Fire Energy cards, reveal them, and put them into your hand. Then, shuffle your deck." },

	variants: [{ type: "reverse" }],
	thirdParty: { tcgplayer: 206298 }
}

export default card
