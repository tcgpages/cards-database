import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Venusaur & Lugia ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Scyther" },
	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",

	dexId: [123],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	level: 25,

	attacks: [
		{
			cost: ["Grass"],
			name: { en: "Swords Dance" },
			effect: { en: "During your next turn, this Pokémon's Slash attack does 30 more damage (before applying Weakness and Resistance)." }
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { en: "Slash" },
			damage: 30
		}
	],

	weaknesses: [{ type: "Fire", value: "×2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 0,
	description: { en: "With ninja-like agility and speed, it can create the illusion that there is more than one of it." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527888 }
		}
	]
}

export default card
