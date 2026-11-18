import { Card } from "../../../interfaces"
import Set from "../Unbroken Bonds"

const card: Card = {
	name: { en: "Pokégear 3.0" },
	illustrator: "OOYAMA",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Item",
	effect: { en: "Look at the top 7 cards of your deck. You may reveal a Supporter card you find there and put it into your hand. Shuffle the other cards back into your deck." },

	variants: [{ type: "normal" }],
	thirdParty: { tcgplayer: 216705 }
}

export default card
