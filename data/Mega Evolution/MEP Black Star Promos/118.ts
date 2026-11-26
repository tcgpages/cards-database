import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,
	name: { en: "Mega Rayquaza ex" },
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",

	dexId: [384],
	hp: 280,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "ex",

	abilities: [
		{
			type: "Ability",
			name: { en: "Ruler's Roar" },
			effect: { en: "Once during your turn, when you play this Pokémon from your hand onto your Bench, you may use this Ability. Look at the top 4 cards of your deck and attach a Basic Energy card you find there to this Pokémon. Shuffle the other cards and put them on the bottom of your deck." }
		}
	],

	attacks: [
		{
			cost: ["Fire", "Lightning", "Colorless"],
			name: { en: "Storm Emerald" },
			damage: "50×",
			effect: { en: "This attack does 50 damage for each Fire Energy and each Lightning Energy attached to all of your Pokémon." }
		}
	],

	weaknesses: [{ type: "Lightning", value: "×2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 2,
	regulationMark: "J",

	variants: [{ type: "holo" }]
}

export default card
