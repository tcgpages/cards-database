import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Blastoise & Suicune ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Lt. Surge's Raticate" },
	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",

	dexId: [20],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",
	evolveFrom: { en: "Lt. Surge's Rattata" },
	level: 32,

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Super Fang" },
			effect: { en: "Put damage counters on your opponent's Active Pokémon until its remaining HP is halved, rounded down. (If your opponent's Active Pokémon has 30 HP remaining, put 2 damage counters on it.)" }
		}
	],

	weaknesses: [{ type: "Fighting", value: "×2" }],
	resistances: [{ type: "Psychic", value: "-30" }],
	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 528004 }
		}
	]
}

export default card
