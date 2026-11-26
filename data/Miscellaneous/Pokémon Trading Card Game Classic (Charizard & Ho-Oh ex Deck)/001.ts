import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Charizard & Ho-Oh ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Charmander" },
	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",

	dexId: [4],
	hp: 50,
	types: ["Fire"],
	stage: "Basic",
	level: 10,

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Scratch" },
			damage: 10
		},
		{
			cost: ["Fire", "Colorless"],
			name: { en: "Ember" },
			damage: 30,
			effect: { en: "Discard a Fire Energy from this Pokémon." }
		}
	],

	weaknesses: [{ type: "Water", value: "×2" }],
	retreat: 1,
	description: { en: "Obviously prefers hot places. If it gets caught in the rain, steam is said to spout from the tip of its tail." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527936 }
		}
	]
}

export default card
