import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Blastoise & Suicune ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Suicune ex" },
	illustrator: "PLANETA Hiiragi",
	rarity: "None",
	category: "Pokemon",

	dexId: [245],
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "ex",

	abilities: [
		{
			type: "Ability",
			name: { en: "Aqua Lift" },
			effect: { en: "If this Pokémon has any Water Energy attached, it has no Retreat Cost." }
		}
	],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { en: "Crystal Blast" },
			damage: "60+",
			effect: { en: "This attack does 30 more damage for each Water Energy attached to this Pokémon." }
		}
	],

	weaknesses: [{ type: "Lightning", value: "×2" }],
	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527998 }
		}
	]
}

export default card
