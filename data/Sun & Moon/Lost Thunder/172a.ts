import { Card } from "../../../interfaces"
import Set from "../Lost Thunder"

const card: Card = {
	name: { en: "Electropower" },
	illustrator: "Ayaka Yoshida",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Item",
	effect: { en: "During this turn, your Lightning Pokémon's attacks do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance)." },

	variants: [{ type: "reverse", foil: "mirror", stamp: ["pokemon-league"] }],
	thirdParty: { tcgplayer: 196724 }
}

export default card
