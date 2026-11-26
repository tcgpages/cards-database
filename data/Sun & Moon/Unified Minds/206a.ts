import { Card } from "../../../interfaces"
import Set from "../Unified Minds"

const card: Card = {
	name: { en: "Reset Stamp" },
	illustrator: "OOYAMA",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Item",
	effect: { en: "Your opponent shuffles their hand into their deck and draws a card for each of their remaining Prize cards." },

	variants: [{ type: "normal" }],
	thirdParty: { tcgplayer: 216707 }
}

export default card
