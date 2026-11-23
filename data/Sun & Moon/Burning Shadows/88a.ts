import { Card } from "../../../interfaces"
import Set from "../Burning Shadows"

const card: Card = {
	name: { en: "Darkrai-GX" },
	illustrator: "PLANETA",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [491],
	hp: 180,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: { en: "Restoration" },
			effect: { en: "Once during your turn (before your attack), if this Pokémon is in your discard pile, you may put it onto your Bench. Then, attach a Darkness Energy card from your discard pile to this Pokémon." }
		}
	],

	attacks: [
		{
			cost: ["Darkness", "Darkness", "Colorless"],
			name: { en: "Dark Cleave" },
			effect: { en: "This attack's damage isn't affected by Resistance." },
			damage: 130
		},
		{
			cost: ["Darkness", "Darkness", "Colorless"],
			name: { en: "Dead End-GX" },
			effect: { en: "If your opponent's Active Pokémon is affected by a Special Condition, that Pokémon is Knocked Out. (You can't use more than 1 GX attack in a game.)" }
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		}
	],
	retreat: 2,

	variants: [
		{ type: "holo", foil: "mirror", thirdParty: { tcgplayer: 162041 } },
		{ type: "holo", size: "jumbo", thirdParty: { tcgplayer: 169938 } }
	],
	thirdParty: { tcgplayer: 162041 }
}

export default card
