import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Charizard & Ho-Oh ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Charmeleon" },
	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",

	dexId: [5],
	hp: 80,
	types: ["Fire"],
	stage: "Stage1",
	evolveFrom: { en: "Charmander" },
	level: 32,

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { en: "Slash" },
			damage: 30
		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: { en: "Flamethrower" },
			damage: 50,
			effect: { en: "Discard a Fire Energy from this Pokémon." }
		}
	],

	weaknesses: [{ type: "Water", value: "×2" }],
	retreat: 1,
	description: { en: "When it swings its burning tail, it raises the temperature to unbearably high levels." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527937 }
		}
	]
}

export default card
