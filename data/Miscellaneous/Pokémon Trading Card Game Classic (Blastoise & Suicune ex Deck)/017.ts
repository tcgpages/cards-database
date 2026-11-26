import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Blastoise & Suicune ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Kangaskhan" },
	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",

	dexId: [115],
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Call for Family" },
			effect: { en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck." }
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { en: "Comet Punch" },
			damage: "20×",
			effect: { en: "Flip 4 coins. This attack does 20 damage for each heads." }
		}
	],

	weaknesses: [{ type: "Fighting", value: "×2" }],
	retreat: 2,
	description: { en: "It raises its offspring in its belly pouch. It lets the baby out to play only when it feels safe." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 528005 }
		}
	]
}

export default card
