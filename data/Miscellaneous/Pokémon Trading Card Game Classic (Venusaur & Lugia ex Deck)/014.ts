import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Venusaur & Lugia ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Dodrio" },
	illustrator: "Yukiko Baba",
	rarity: "None",
	category: "Pokemon",

	dexId: [85],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",
	evolveFrom: { en: "Doduo" },

	abilities: [
		{
			type: "Poke-BODY",
			name: { en: "Retreat Aid" },
			effect: { en: "As long as this Pokémon is on your Bench, your Active Pokémon's Retreat Cost is {C}{C} less." }
		}
	],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { en: "Incessant Peck" },
			damage: "20+",
			effect: { en: "Flip a coin until you get tails. This attack does 20 more damage for each heads." }
		}
	],

	weaknesses: [{ type: "Lightning", value: "×2" }],
	resistances: [{ type: "Fighting", value: "-20" }],
	retreat: 1,
	description: { en: "It collects data and plans three times as wisely, but it may think too much and fall into a state of immobility." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527901 }
		}
	]
}

export default card
