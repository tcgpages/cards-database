import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Venusaur & Lugia ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Parasect" },
	illustrator: "Kagemaru Himeno",
	rarity: "None",
	category: "Pokemon",

	dexId: [47],
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: { en: "Paras" },
	level: 33,

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Nutritional Support" },
			effect: { en: "Search your deck for up to 2 Basic Grass Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck." }
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: { en: "Hibernation Spore" },
			damage: 40,
			effect: { en: "Your opponent's Active Pokémon is now Asleep. During Pokémon Checkup, your opponent flips 2 coins instead of 1. If either of them is tails, that Pokémon is still Asleep." }
		}
	],

	weaknesses: [{ type: "Fire", value: "+20" }],
	retreat: 1,
	description: { en: "A mushroom grown larger than the host's body controls PARASECT. It scatters poisonous spores." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527887 }
		}
	]
}

export default card
