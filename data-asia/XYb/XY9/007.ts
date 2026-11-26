import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "チュリネ"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: [
		"Grass"
	],
	stage: "Basic",
	dexId: [
		548
	],
	description: {
		ja: "水分と 栄養の 豊富な 土を 好むので チュリネの 住む 土地は 作物の 育ちが 良い。"
	},
	attacks: [
		{
			name: {
				ja: "アロマセラピー"
			},
			effect: {
				ja: "自分のポケモン全員のHPを、それぞれ「10」回復する。"
			},
			cost: [
				"Grass"
			]
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
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
