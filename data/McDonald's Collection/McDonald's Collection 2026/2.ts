import { Card } from "../../../interfaces"
import Set from "../McDonald's Collection 2026"

const card: Card = {
	set: Set,
	name: { en: "Chandelure" },
	illustrator: "Haru Akasaka",
	rarity: "None",
	category: "Pokemon",

	dexId: [609],
	hp: 150,
	types: ["Fire"],
	stage: "Stage2",
	evolveFrom: { en: "Lampent" },

	attacks: [
		{
			cost: ["Fire"],
			name: { en: "Combustion Chain" },
			damage: "10+",
			effect: { en: "This attack does 50 more damage for each Energy attached to your opponent's Active Pokémon." }
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: { en: "Heat Blast" },
			damage: 150
		}
	],

	weaknesses: [{ type: "Water", value: "×2" }],
	retreat: 2,
	description: { en: "In homes illuminated by Chandelure instead of lights, funerals were a constant occurrence—or so it's said." },
	regulationMark: "G",

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 730417 }
		}
	]
}

export default card
