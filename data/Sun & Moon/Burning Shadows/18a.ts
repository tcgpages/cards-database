import { Card } from "../../../interfaces"
import Set from "../Burning Shadows"

const card: Card = {
	name: { en: "Charmander" },
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [4],
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Scratch" },
			damage: 10
		},
		{
			cost: ["Fire", "Colorless"],
			name: { en: "Flame Tail" },
			damage: 20
		}
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 1,

	description: { en: "The flame on its tail indicates Charmander's life force. If it is healthy, the flame burns brightly." },

	variants: [
		{ type: "holo", foil: "cosmos", thirdParty: { tcgplayer: 186106 } },
		{ type: "holo", foil: "sequin", thirdParty: { tcgplayer: 186319 } }
	],
	thirdParty: { tcgplayer: 186106 }
}

export default card
