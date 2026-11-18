import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ナゾノクサ"
	},
	illustrator: "MAHOU",
	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: [
		"Grass"
	],
	stage: "Basic",
	dexId: [
		43
	],
	description: {
		ja: "別名 アルキメンデス。 夜になると ２本の 根っこで ３００メートルも 歩くという。"
	},
	attacks: [
		{
			name: {
				ja: "ころばす"
			},
			effect: {
				ja: "コインを1回投げオモテなら、10ダメージを追加。"
			},
			cost: [
				"Grass"
			],
			damage: "10+"
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
