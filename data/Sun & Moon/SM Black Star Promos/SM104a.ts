import { Card } from "../../../interfaces"
import Set from "../SM Black Star Promos"

const card: Card = {
	name: { en: "Solgaleo-GX" },
	illustrator: "PLANETA Igarashi",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [791],
	hp: 250,
	types: ["Metal"],
	evolveFrom: { en: "Cosmoem" },
	stage: "Stage2",
	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: { en: "Shining Mane" },
			effect: { en: "Your Pokémon in play have no Weakness." }
		}
	],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { en: "Turbo Strike" },
			effect: { en: "Attach 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon." },
			damage: 120
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { en: "Prominence-GX" },
			effect: { en: "Heal all damage from all of your Pokémon. (You can't use more than 1 GX attack in a game.)" }
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
	retreat: 2,

	variants: [{ type: "holo", subtype: "textured", foil: "gold" }],
	thirdParty: { tcgplayer: 202637 }
}

export default card
