import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Venusaur & Lugia ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Hitmonchan" },
	illustrator: "Shigenori Negishi",
	rarity: "None",
	category: "Pokemon",

	dexId: [107],
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting"],
			name: { en: "Coordinated Beatdown" },
			damage: "20+",
			effect: { en: "If Hitmonlee is on your Bench, this attack does 20 more damage." }
		},
		{
			cost: ["Fighting", "Fighting"],
			name: { en: "Mach Cross" },
			damage: 60
		}
	],

	weaknesses: [{ type: "Psychic", value: "×2" }],
	retreat: 1,
	description: { en: "Its punches slice the air. However, it seems to need a short break after fighting for three minutes." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527899 }
		}
	]
}

export default card
