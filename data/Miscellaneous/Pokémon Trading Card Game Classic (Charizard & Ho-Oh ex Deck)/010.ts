import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Charizard & Ho-Oh ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Voltorb" },
	illustrator: "Keiji Kinebuchi",
	rarity: "None",
	category: "Pokemon",

	dexId: [100],
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",
	level: 10,

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Tackle" },
			damage: 10
		}
	],

	weaknesses: [{ type: "Fighting", value: "×2" }],
	retreat: 1,
	description: { en: "Usually found in power plants. Easily mistaken for a Poké Ball, it has zapped many people." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527945 }
		}
	]
}

export default card
