import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ミツハニー"
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "None",
	category: "Pokemon",
	hp: 40,
	types: [
		"Grass"
	],
	stage: "Basic",
	dexId: [
		415
	],
	description: {
		ja: "集めた ミツを 住処に 運ぶ。 夜には たくさんの ミツハニーが 重なって ハチの巣になり 眠る。"
	},
	attacks: [
		{
			name: {
				ja: "むしくい"
			},
			cost: [
				"Grass"
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
	retreat: 1,
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
			foil: "mirror"
		}
	]
}

export default card
