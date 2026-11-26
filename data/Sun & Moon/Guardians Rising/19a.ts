import { Card } from "../../../interfaces"
import Set from "../Guardians Rising"

const card: Card = {
	name: { en: "Alolan Sandshrew" },
	illustrator: "Hideki Ishikawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [27],
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			name: { en: "Defense Curl" },
			effect: { en: "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent's next turn." }
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: { en: "Ice Ball" },
			damage: 30
		}
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	retreat: 1,

	description: { en: "It lives on snowy mountains. Its steel shell is very hard—so much so, it can't roll its body up into a ball." },

	variants: [{ type: "holo" }],
	thirdParty: { tcgplayer: 197853 }
}

export default card
