import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "クイタラン"
	},
	rarity: "Common",
	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 120,
	types: [
		"Fire"
	],
	stage: "Basic",
	dexId: [
		631
	],
	description: {
		ja: "しっぽの 穴から 空気を 取りこみ 炎を 燃やす。 穴を 塞がれると 具合が 悪くなる。"
	},
	attacks: [
		{
			name: {
				ja: "したでなめる"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Colorless"
			],
			damage: 20
		},
		{
			name: {
				ja: "かえんほうしゃ"
			},
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Fire",
				"Fire",
				"Colorless"
			],
			damage: 120
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 2,
	regulationMark: "D",
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
