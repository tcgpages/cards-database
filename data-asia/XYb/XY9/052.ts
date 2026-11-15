import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ヤンチャム"
	},
	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: [
		"Fighting"
	],
	stage: "Basic",
	dexId: [
		674
	],
	description: {
		ja: "一生懸命 怖い 顔で 相手を にらみつけるが 頭を なでられると つい にやけてしまう。"
	},
	attacks: [
		{
			name: {
				ja: "なぐる"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		},
		{
			name: {
				ja: "がちんこ"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
