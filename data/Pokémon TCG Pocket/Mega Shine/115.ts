import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Mega Scizor ex"
	},
	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",
	dexId: [
		212
	],
	hp: 200,
	types: [
		"Metal"
	],
	evolveFrom: {
		en: "Scyther"
	},
	stage: "Stage1",
	suffix: "EX",
	attacks: [
		{
			name: {
				en: "Bullet Slugger"
			},
			damage: "100+",
			cost: [
				"Metal",
				"Metal",
				"Colorless"
			],
			effect: {
				en: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 50 more damage."
			}
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		}
	],
	retreat: 2,
}

export default card
