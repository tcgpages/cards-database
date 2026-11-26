import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Charizard & Ho-Oh ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Basic Fire Energy" },
	rarity: "None",
	category: "Energy",

	energyType: "Normal",
	types: ["Fire"],

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527983 }
		}
	]
}

export default card
