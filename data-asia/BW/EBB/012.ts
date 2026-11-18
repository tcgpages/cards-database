import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ロコン"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		37
	],
	hp: 60,
	types: [
		"Fire"
	],
	stage: "Basic",
	description: {
		ja: "６本の しっぽは 育つごとに 毛並みが よくなり 美しくなる。 抱きしめると ほんのり 暖かい。"
	},
	attacks: [
		{
			name: {
				ja: "ひをふく"
			},
			effect: {
				ja: "コインを1回投げオモテなら、10ダメージを追加。"
			},
			cost: [
				"Fire",
				"Colorless"
			],
			damage: "20+"
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "normal"
		},
		{
			type: "reverse",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "reverse"
		}
	]
}

export default card
