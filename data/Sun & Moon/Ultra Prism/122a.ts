import { Card } from "../../../interfaces"
import Set from "../Ultra Prism"

const card: Card = {
	name: { en: "Escape Board" },
	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Tool",
	effect: { en: "The Retreat Cost of the Pokémon this card is attached to is Colorless less, and it can retreat even if it's Asleep or Paralyzed." },

	variants: [{ type: "reverse", foil: "mirror", stamp: ["pokemon-league"] }],
	thirdParty: { tcgplayer: 205949 }
}

export default card
