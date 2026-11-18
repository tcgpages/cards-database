import { Card } from "../../../interfaces"
import Set from "../Guardians Rising"

const card: Card = {
	name: { en: "Enhanced Hammer" },
	illustrator: "Yoshinobu Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Item",
	effect: { en: "Discard a Special Energy from 1 of your opponent's Pokémon." },

	variants: [{ type: "reverse" }],
	thirdParty: { tcgplayer: 185982 }
}

export default card
