import { Card } from "../../../interfaces"
import Set from "../Lost Thunder"

const card: Card = {
	name: { en: "Sightseer" },
	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Supporter",
	effect: { en: "You may discard any number of cards from your hand. Then, draw cards until you have 5 cards in your hand. If you can't draw any cards in this way, you can't play this card." },

	variants: [{ type: "normal" }],
	thirdParty: { tcgplayer: 200204 }
}

export default card
