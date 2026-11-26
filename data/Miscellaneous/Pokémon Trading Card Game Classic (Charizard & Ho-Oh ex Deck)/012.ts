import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Charizard & Ho-Oh ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Zapdos" },
	illustrator: "Hitoshi Ariga",
	rarity: "None",
	category: "Pokemon",

	dexId: [145],
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning"],
			name: { en: "Thunder Shock" },
			damage: 20,
			effect: { en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed." }
		},
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: { en: "Drill Peck" },
			damage: 120
		}
	],

	weaknesses: [{ type: "Lightning", value: "×2" }],
	resistances: [{ type: "Fighting", value: "-20" }],
	retreat: 1,
	description: { en: "A legendary bird Pokémon that is said to appear from clouds while dropping enormous lightning bolts." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527947 }
		}
	]
}

export default card
