import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Venusaur & Lugia ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Lugia ex" },
	illustrator: "PLANETA Hiiragi",
	rarity: "None",
	category: "Pokemon",

	dexId: [249],
	hp: 230,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "ex",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { en: "Rising Wind" },
			damage: 30,
			effect: { en: "Search your deck for a Basic Energy card and attach it to this Pokémon. Then, shuffle your deck." }
		},
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: { en: "Aero Break" },
			damage: 200,
			effect: { en: "This Pokémon also does 30 damage to itself." }
		}
	],

	weaknesses: [{ type: "Lightning", value: "×2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527905 }
		},
		{
			type: "holo",
			size: "jumbo",
			thirdParty: { tcgplayer: 545663 }
		}
	]
}

export default card
