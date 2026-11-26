import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Blastoise & Suicune ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Magikarp" },
	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",

	dexId: [129],
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Splash" },
			damage: 10
		}
	],

	weaknesses: [{ type: "Lightning", value: "×2" }],
	retreat: 1,
	description: { en: "For no reason, it jumps and splashes about, making it easy for predators like PIDGEOTTO to catch it mid-jump." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527991 }
		}
	]
}

export default card
