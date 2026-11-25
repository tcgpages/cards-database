import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Venusaur & Lugia ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Onix" },
	illustrator: "Tomokazu Komiya",
	rarity: "None",
	category: "Pokemon",

	dexId: [95],
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: { en: "Land Crush" },
			damage: 120
		}
	],

	weaknesses: [{ type: "Grass", value: "×2" }],
	retreat: 4,
	description: { en: "It usually lives underground. It searches for food while boring its way through the ground at 50 miles per hour." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527895 }
		}
	]
}

export default card
