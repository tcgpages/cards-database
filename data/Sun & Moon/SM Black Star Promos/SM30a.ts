import { Card } from "../../../interfaces"
import Set from "../SM Black Star Promos"

const card: Card = {
	name: { en: "Tapu Koko" },
	illustrator: "kirisAki",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [785],
	hp: 110,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { en: "Flying Flip" },
			effect: { en: "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
		},
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: { en: "Electric Ball" },
			damage: 100
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		}
	],
	retreat: 0,

	description: { en: "This guardian deity of Melemele is brimming with curiosity. It summons thunderclouds and stores their lightning inside its body." },

	variants: [{ type: "holo", foil: "cosmos" }],
	thirdParty: { tcgplayer: 173381 }
}

export default card
