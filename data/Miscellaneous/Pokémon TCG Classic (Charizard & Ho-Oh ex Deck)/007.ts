import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Charizard & Ho-Oh ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Ho-Oh ex" },
	illustrator: "PLANETA Tsuji",
	rarity: "None",
	category: "Pokemon",

	dexId: [250],
	hp: 220,
	types: ["Fire"],
	stage: "Basic",
	suffix: "ex",

	attacks: [
		{
			cost: ["Fire"],
			name: { en: "Phoenix Breath" },
			effect: { en: "Attach up to 2 Basic Energy cards from your discard pile to your  Pokémon in any way you like." }
		},
		{
			cost: ["Fire", "Fire", "Colorless", "Colorless"],
			name: { en: "Eternal Blaze" },
			damage: 180,
			effect: { en: "During your next turn, this Pokémon can't attack." }
		}
	],

	weaknesses: [{ type: "Water", value: "×2" }],
	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527942 }
		}
	]
}

export default card
