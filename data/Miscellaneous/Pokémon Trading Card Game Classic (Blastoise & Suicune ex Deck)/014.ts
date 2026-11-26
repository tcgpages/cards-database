import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Blastoise & Suicune ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Mewtwo" },
	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",

	dexId: [150],
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",
	level: 53,

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { en: "Psychic" },
			damage: "20+",
			effect: { en: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon." }
		},
		{
			cost: ["Psychic", "Psychic"],
			name: { en: "Barrier" },
			effect: { en: "During your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon. If 1 of your Pokémon used Barrier during your last turn, this attack can't be used." }
		}
	],

	weaknesses: [{ type: "Psychic", value: "×2" }],
	retreat: 2,
	description: { en: "A Pokémon whose genetic code was repeatedly recombined for research. It turned vicious as a result." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 528002 }
		}
	]
}

export default card
