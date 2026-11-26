import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Charizard & Ho-Oh ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Stantler" },
	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",

	dexId: [234],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	level: 28,

	attacks: [
		{
			cost: [],
			name: { en: "Lead" },
			effect: { en: "Search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck." }
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { en: "Frighten Horn" },
			damage: 20,
			effect: { en: "If your opponent's Active Pokémon is a Basic Pokémon, it is now Confused." }
		}
	],

	weaknesses: [{ type: "Fighting", value: "+20" }],
	retreat: 1,
	description: { en: "Staring at its antlers creates an odd sensation as if one were being drawn into their centers." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527950 }
		}
	]
}

export default card
