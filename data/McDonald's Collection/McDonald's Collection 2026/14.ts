import { Card } from "../../../interfaces"
import Set from "../McDonald's Collection 2026"

const card: Card = {
	set: Set,
	name: { en: "Snorlax" },
	illustrator: "Souichirou Gunjima",
	rarity: "None",
	category: "Pokemon",

	dexId: [143],
	hp: 160,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "But First, Food" },
			effect: { en: "Attach an Energy card from your hand to this Pokémon. If you do, heal 60 damage from this Pokémon." }
		},
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"],
			name: { en: "Heavy Impact" },
			damage: 160
		}
	],

	weaknesses: [{ type: "Fighting", value: "×2" }],
	retreat: 4,
	description: { en: "Its stomach's digestive juices can dissolve any kind of poison. Eating things off the ground doesn't bother it at all." },
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: { tcgplayer: 730431 }
		}
	]
}

export default card
