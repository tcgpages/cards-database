import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "チコリータ"
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: [
		"Grass"
	],
	stage: "Basic",
	dexId: [
		152
	],
	description: {
		ja: "頭の 葉っぱで まわりの 温度や 湿度を 探る。 日差しを 浴びることが 大好き。"
	},
	attacks: [
		{
			name: {
				ja: "たいあたり"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		},
		{
			name: {
				ja: "ちょっとすいとる"
			},
			effect: {
				ja: "このポケモンのHPを「10」回復する。"
			},
			cost: [
				"Grass",
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
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
