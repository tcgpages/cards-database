import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Venusaur & Lugia ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Ivysaur" },
	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",

	dexId: [2],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: { en: "Bulbasaur" },
	level: 20,

	attacks: [
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: { en: "Vine Whip" },
			damage: 30
		},
		{
			cost: ["Grass", "Grass", "Grass"],
			name: { en: "Poison Powder" },
			damage: 20,
			effect: { en: "Your opponent's Active Pokémon is now Poisoned." }
		}
	],

	weaknesses: [{ type: "Fire", value: "×2" }],
	retreat: 1,
	description: { en: "When the bulb on its back grows large, the Pokémon seems to lose the ability to stand on its hind legs." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527884 }
		}
	]
}

export default card
