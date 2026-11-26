import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Charizard & Ho-Oh ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Clefairy" },
	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",

	dexId: [35],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",
	level: 14,

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Sing" },
			effect: { en: "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep." }
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { en: "Metronome" },
			effect: { en: "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack." }
		}
	],

	weaknesses: [{ type: "Fighting", value: "×2" }],
	resistances: [{ type: "Psychic", value: "-30" }],
	retreat: 1,
	description: { en: "Its magical and cute appeal has many admirers. It is rare and found only in certain areas." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527948 }
		}
	]
}

export default card
