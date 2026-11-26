import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Charizard & Ho-Oh ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Miltank" },
	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",

	dexId: [241],
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",
	level: 32,

	attacks: [
		{
			cost: [],
			name: { en: "Healing Milk" },
			effect: { en: "Choose 1 of your Pokémon, and then flip 2 coins. For each heads, heal 30 damage from that Pokémon." }
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { en: "Continuous Tumble" },
			damage: "20×",
			effect: { en: "Flip a coin until you get tails. This attack does 20 damage for each heads." }
		}
	],

	weaknesses: [{ type: "Fighting", value: "+20" }],
	retreat: 2,
	description: { en: "It is said that kids who drink MILTANK's milk grow up to become hearty, healthy adults." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527951 }
		}
	]
}

export default card
