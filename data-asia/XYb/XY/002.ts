import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "クサイハナ"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: [
		"Grass"
	],
	evolveFrom: {
		ja: "ナゾノクサ"
	},
	stage: "Stage1",
	dexId: [
		44
	],
	description: {
		ja: "口から たれている ミツは ２キロ 離れていても 鼻が まがるほど 猛烈に くさい。"
	},
	attacks: [
		{
			name: {
				ja: "よだれ"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: 30
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
