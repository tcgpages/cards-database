import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Dratini"
	},
	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	dexId: [
		147
	],
	hp: 60,
	types: [
		"Dragon"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Tail Strike"
			},
			damage: "10+",
			cost: [
				"Colorless"
			],
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage."
			}
		}
	],
	retreat: 1,
}

export default card
