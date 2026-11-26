import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Blastoise & Suicune ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Lapras" },
	illustrator: "Suwama Chiaki",
	rarity: "None",
	category: "Pokemon",

	dexId: [131],
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { en: "Ice Beam" },
			damage: 20,
			effect: { en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed." }
		},
		{
			cost: ["Water", "Water"],
			name: { en: "Ice Blade" },
			effect: { en: "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
		}
	],

	weaknesses: [{ type: "Metal", value: "×2" }],
	retreat: 2,
	description: { en: "They have gentle hearts. Because they rarely fight, many have been caught. Their number has dwindled." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527994 }
		}
	]
}

export default card
