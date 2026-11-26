import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Charizard & Ho-Oh ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Charizard" },
	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",

	dexId: [6],
	hp: 120,
	types: ["Fire"],
	stage: "Stage2",
	evolveFrom: { en: "Charmeleon" },
	level: 76,

	abilities: [
		{
			type: "Pokemon Power",
			name: { en: "Energy Burn" },
			effect: { en: "All Energy attached to this Pokémon are Fire Energy instead of their usual type. This Pokémon Power stops working if this Pokémon is Asleep, Confused, or Paralyzed." }
		}
	],

	attacks: [
		{
			cost: ["Fire", "Fire", "Fire", "Fire"],
			name: { en: "Fire Spin" },
			damage: 100,
			effect: { en: "Discard 2 Energy from this Pokémon." }
		}
	],

	weaknesses: [{ type: "Water", value: "×2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 3,
	description: { en: "Spits fire that is hot enough to melt boulders. Known to unintentionally cause forest fires." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527938 }
		}
	]
}

export default card
