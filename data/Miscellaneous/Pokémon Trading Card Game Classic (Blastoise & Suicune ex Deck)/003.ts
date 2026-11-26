import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Blastoise & Suicune ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Blastoise" },
	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",

	dexId: [9],
	hp: 100,
	types: ["Water"],
	stage: "Stage2",
	evolveFrom: { en: "Wartortle" },
	level: 52,

	abilities: [
		{
			type: "Pokemon Power",
			name: { en: "Rain Dance" },
			effect: { en: "As often as you like during your turn, you may attach a Basic Water Energy card from your hand to 1 of your Water Pokémon. This Pokémon Power can't be used if this Pokémon is Asleep, Confused, or Paralyzed." }
		}
	],

	attacks: [
		{
			cost: ["Water", "Water", "Water"],
			name: { en: "Hydro Pump" },
			damage: "40+",
			effect: { en: "This attack does 10 more damage for each extra Water Energy attached to this Pokémon (in addition to this attack's cost). You can't add more than 20 damage in this way." }
		}
	],

	weaknesses: [{ type: "Lightning", value: "×2" }],
	retreat: 3,
	description: { en: "A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527988 }
		}
	]
}

export default card
