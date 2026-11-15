import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "フシギダネ"
	},
	rarity: "Promo",
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 60,
	types: [
		"Grass"
	],
	stage: "Basic",
	dexId: [
		1
	],
	description: {
		ja: "生まれてから しばらくの あいだは 背中の タネから 栄養をもらって 大きく 育つ。"
	},
	attacks: [
		{
			name: {
				ja: "ねむりごな"
			},
			effect: {
				ja: "相手のバトルポケモンをねむりにする。"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: 10
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
			type: "Water",
			value: "-20"
		}
	],
	retreat: 2
}

export default card
