import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Charizard & Ho-Oh ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Clefable" },
	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",

	dexId: [36],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",
	evolveFrom: { en: "Clefairy" },
	level: 34,

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Metronome" },
			effect: { en: "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack." }
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { en: "Minimize" },
			effect: { en: "During your opponent's next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance)." }
		}
	],

	weaknesses: [{ type: "Fighting", value: "×2" }],
	resistances: [{ type: "Psychic", value: "-30" }],
	retreat: 2,
	description: { en: "A timid Fairy Pokémon that is rarely seen. It will run and hide the moment it senses people." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527949 }
		}
	]
}

export default card
