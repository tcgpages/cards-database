import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Venusaur & Lugia ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Pinsir" },
	illustrator: "DemizuPosuka",
	rarity: "None",
	category: "Pokemon",

	dexId: [127],
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { en: "Roof Fling" },
			effect: { en: "Flip a coin. If heads, put your opponent's Active Pokémon and all attached cards into your opponent's hand." }
		},
		{
			cost: ["Grass", "Grass"],
			name: { en: "Guillotine" },
			damage: 50
		}
	],

	weaknesses: [{ type: "Fire", value: "×2" }],
	retreat: 2,
	description: { en: "One solid blow from its horns is enough to split apart a large tree. Its greatest rival in Alola is Vikavolt." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527891 }
		}
	]
}

export default card
