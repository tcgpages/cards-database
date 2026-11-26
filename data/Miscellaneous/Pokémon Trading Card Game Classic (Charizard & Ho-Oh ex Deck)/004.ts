import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Charizard & Ho-Oh ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Ponyta" },
	illustrator: "Jiro Sasumo",
	rarity: "None",
	category: "Pokemon",

	dexId: [77],
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire"],
			name: { en: "Flame Tail" },
			damage: 20
		}
	],

	weaknesses: [{ type: "Water", value: "×2" }],
	retreat: 1,
	description: { en: "These Pokémon live in herds out in the grassland. Newborn foals lack their fiery manes, which will develop about an hour after birth." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527939 }
		}
	]
}

export default card
