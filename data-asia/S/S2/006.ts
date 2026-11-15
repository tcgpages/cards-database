import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "アメタマ"
	},
	rarity: "Common",
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 50,
	types: [
		"Grass"
	],
	stage: "Basic",
	dexId: [
		283
	],
	description: {
		ja: "水草の 多い 池や 沼に 棲む。 棲息地も 食う エサも 近い シズクモと よく 争う。"
	},
	attacks: [
		{
			name: {
				ja: "こうそくいどう"
			},
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。"
			},
			cost: [
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
	retreat: 1,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
