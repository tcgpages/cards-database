import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Blastoise & Suicune ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Starmie" },
	illustrator: "Shin Nagasawa",
	rarity: "None",
	category: "Pokemon",

	dexId: [121],
	hp: 90,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: { en: "Staryu" },

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Confuse Ray" },
			effect: { en: "Your opponent's Active Pokémon is now Confused." }
		},
		{
			cost: ["Water"],
			name: { en: "Swift" },
			damage: 50,
			effect: { en: "This attack's damage isn't affected by Weakness or Resistance, or by any effects on your opponent's Active Pokémon." }
		}
	],

	weaknesses: [{ type: "Lightning", value: "×2" }],
	retreat: 0,
	description: { en: "At the center of its body is a red core, which sends mysterious radio signals into the night sky." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527990 }
		}
	]
}

export default card
