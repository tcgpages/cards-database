import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Venusaur & Lugia ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Venusaur" },
	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",

	dexId: [3],
	hp: 100,
	types: ["Grass"],
	stage: "Stage2",
	evolveFrom: { en: "Ivysaur" },
	level: 67,

	abilities: [
		{
			type: "Pokemon Power",
			name: { en: "Energy Trans" },
			effect: { en: "As often as you like during your turn, you may move a Grass Energy from 1 of your Pokémon to another of your Pokémon. This Pokémon Power can't be used if this Pokémon is Asleep, Confused, or Paralyzed." }
		}
	],

	attacks: [
		{
			cost: ["Grass", "Grass", "Grass", "Grass"],
			name: { en: "Solar Beam" },
			damage: 60
		}
	],

	weaknesses: [{ type: "Fire", value: "×2" }],
	retreat: 2,
	description: { en: "This plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527885 }
		}
	]
}

export default card
