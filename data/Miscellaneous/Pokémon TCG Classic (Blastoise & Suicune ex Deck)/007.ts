import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Blastoise & Suicune ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Gyarados" },
	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",

	dexId: [130],
	hp: 130,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: { en: "Magikarp" },

	attacks: [
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: { en: "Hydro Splash" },
			damage: 50
		},
		{
			cost: ["Water", "Water", "Colorless", "Colorless"],
			name: { en: "Hyper Beam" },
			damage: 80,
			effect: { en: "Discard an Energy from your opponent's Active Pokémon." }
		}
	],

	weaknesses: [{ type: "Lightning", value: "×2" }],
	resistances: [{ type: "Fighting", value: "-20" }],
	retreat: 3,
	description: { en: "Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527992 }
		}
	]
}

export default card
