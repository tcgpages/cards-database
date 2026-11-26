import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Charizard & Ho-Oh ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Rapidash" },
	illustrator: "Ligton",
	rarity: "None",
	category: "Pokemon",

	dexId: [78],
	hp: 100,
	types: ["Fire"],
	stage: "Stage1",
	evolveFrom: { en: "Ponyta" },

	attacks: [
		{
			cost: ["Fire"],
			name: { en: "Combustion" },
			damage: 30
		},
		{
			cost: ["Fire", "Colorless"],
			name: { en: "Ring of Fire" },
			damage: 50,
			effect: { en: "Your opponent's Active Pokémon is now Burned. During your opponent's next turn, that Pokémon can't retreat." }
		}
	],

	weaknesses: [{ type: "Water", value: "×2" }],
	retreat: 1,
	description: { en: "This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527940 }
		}
	]
}

export default card
