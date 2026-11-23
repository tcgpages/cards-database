import { Card } from "../../../interfaces"
import Set from "../Celestial Storm"

const card: Card = {
	name: { en: "Rayquaza-GX" },
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [384],
	hp: 180,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: { en: "Stormy Winds" },
			effect: { en: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard the top 3 cards of your deck. If you do, attach a basic Energy card from your discard pile to this Pokémon." }
		}
	],

	attacks: [
		{
			cost: ["Grass", "Lightning", "Colorless"],
			name: { en: "Dragon Break" },
			effect: { en: "This attack does 30 damage times the amount of basic Grass and basic Lightning Energy attached to your Pokémon." },
			damage: "30×"
		},
		{
			cost: ["Grass"],
			name: { en: "Tempest-GX" },
			effect: { en: "Discard your hand and draw 10 cards. (You can't use more than 1 GX attack in a game.)" }
		}
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		}
	],
	retreat: 3,

	variants: [
		{ type: "holo", subtype: "textured", thirdParty: { tcgplayer: 202638 } },
		{ type: "holo", size: "jumbo", thirdParty: { tcgplayer: 212823 } }
	],
	thirdParty: { tcgplayer: 202638 }
}

export default card
