import { Card } from "../../../interfaces"
import Set from "../Guardians Rising"

const card: Card = {
	name: { en: "Max Potion" },
	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Item",
	effect: { en: "Heal all damage from 1 of your Pokémon. If you do, discard all Energy from that Pokémon." },

	variants: [{ type: "reverse" }],
	thirdParty: { tcgplayer: 186825 }
}

export default card
