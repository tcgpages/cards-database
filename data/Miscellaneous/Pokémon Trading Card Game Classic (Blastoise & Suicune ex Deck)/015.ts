import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Blastoise & Suicune ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Lt. Surge's Rattata" },
	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",

	dexId: [19],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",
	level: 10,

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Focus Energy" },
			effect: { en: "During your next turn, this Pokémon's Gnaw attack does 20 more damage (before applying Weakness and Resistance)." }
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { en: "Gnaw" },
			damage: 20
		}
	],

	weaknesses: [{ type: "Fighting", value: "×2" }],
	resistances: [{ type: "Psychic", value: "-30" }],
	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 528003 }
		}
	]
}

export default card
