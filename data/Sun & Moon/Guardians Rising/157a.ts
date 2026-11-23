import { Card } from "../../../interfaces"
import Set from "../Guardians Rising"

const card: Card = {
	name: { en: "Metagross-GX" },
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [376],
	hp: 250,
	types: ["Metal"],
	evolveFrom: { en: "Metang" },
	stage: "Stage2",
	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: { en: "Geotech System" },
			effect: { en: "Once during your turn (before your attack), you may attach a Psychic or Metal Energy card from your discard pile to your Active Pokémon." }
		}
	],

	attacks: [
		{
			cost: ["Metal", "Metal", "Colorless"],
			name: { en: "Giga Hammer" },
			effect: { en: "This Pokémon can't use Giga Hammer during your next turn." },
			damage: 150
		},
		{
			cost: ["Colorless"],
			name: { en: "Algorithm-GX" },
			effect: { en: "Search your deck for up to 5 cards and put them into your hand. Then, shuffle your deck. (You can't use more than 1 GX attack in a game.)" }
		}
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		}
	],
	retreat: 3,

	variants: [{ type: "holo", subtype: "textured" }],
	thirdParty: { tcgplayer: 198530 }
}

export default card
