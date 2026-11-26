import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ツタージャ"
	},
	rarity: "Promo",
	illustrator: "Shizurow",
	category: "Pokemon",
	hp: 60,
	types: [
		"Grass"
	],
	stage: "Basic",
	dexId: [
		495
	],
	description: {
		ja: "しっぽで 太陽の光を 浴びて 光合成を する。 元気を なくすと しっぽが たれさがる。"
	},
	attacks: [
		{
			name: {
				ja: "にらむ"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "しっぽでたたく"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: 20
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
	retreat: 1
}

export default card
