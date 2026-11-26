import { Card } from "../../../interfaces"
import Set from "../McDonald's Collection 2026"

const card: Card = {
	set: Set,
	name: { en: "Palafin" },
	illustrator: "Souichirou Gunjima",
	rarity: "None",
	category: "Pokemon",

	dexId: [964],
	hp: 150,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: { en: "Finizen" },

	attacks: [
		{
			cost: ["Water"],
			name: { en: "Jet Punch" },
			damage: 30,
			effect: { en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
		},
		{
			cost: ["Water", "Water"],
			name: { en: "Justice Kick" },
			damage: 210,
			effect: { en: "If this Pokémon didn't move from the Bench to the Active Spot this turn, this attack does nothing." }
		}
	],

	weaknesses: [{ type: "Lightning", value: "×2" }],
	retreat: 2,
	description: { en: "This Pokémon's ancient genes have awakened. It is now so extraordinarily strong that it can easily lift a cruise ship with one fin." },
	regulationMark: "G",

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 730418 }
		}
	]
}

export default card
