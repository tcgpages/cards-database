import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ハスボー"
	},
	rarity: "Common",
	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 60,
	types: [
		"Grass"
	],
	stage: "Basic",
	dexId: [
		270
	],
	description: {
		ja: "きれいな 水を 探して 歩く。 長い 時間 水を 飲まないと 頭の 葉っぱが 枯れてしまう。"
	},
	attacks: [
		{
			name: {
				ja: "プチドレイン"
			},
			effect: {
				ja: "このポケモンのHPを「10」回復する。"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		},
		{
			name: {
				ja: "ぶつかる"
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
	retreat: 1,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
