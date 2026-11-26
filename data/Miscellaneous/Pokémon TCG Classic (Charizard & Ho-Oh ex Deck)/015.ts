import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Charizard & Ho-Oh ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Dunsparce" },
	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",

	dexId: [206],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Strike and Run" },
			effect: { en: "Search your deck for up to 3 Basic Pokémon and put them onto your Bench. Then, shuffle your deck. If you put any Pokémon onto your Bench in this way, you may switch this Pokémon with 1 of your Benched Pokémon." }
		},
		{
			cost: ["Colorless"],
			name: { en: "Sudden Flash" },
			damage: 10,
			effect: { en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed." }
		}
	],

	weaknesses: [{ type: "Fighting", value: "×2" }],
	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527952 }
		}
	]
}

export default card
