import { Card } from "../../../interfaces"
import Set from "../Burning Shadows"

const card: Card = {
	name: { en: "Kiawe" },
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	trainerType: "Supporter",
	effect: { en: "Search your deck for up to 4 Fire Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck. Your turn ends." },

	variants: [{ type: "reverse", foil: "mirror", stamp: ["pokemon-league"] }],
	thirdParty: { tcgplayer: 193264 }
}

export default card
