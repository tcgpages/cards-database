import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Venusaur & Lugia ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Paras" },
	illustrator: "Yuka Morii",
	rarity: "None",
	category: "Pokemon",

	dexId: [46],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Call for Family" },
			effect: { en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck." }
		},
		{
			cost: ["Grass"],
			name: { en: "Toxic Spore" },
			damage: 10,
			effect: { en: "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned." }
		}
	],

	weaknesses: [{ type: "Fire", value: "×2" }],
	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527886 }
		}
	]
}

export default card
