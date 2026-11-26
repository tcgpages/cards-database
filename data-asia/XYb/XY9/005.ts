import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "コロボーシ"
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: [
		"Grass"
	],
	stage: "Basic",
	dexId: [
		401
	],
	description: {
		ja: "触角 同士が ぶつかると コロン コロンと 木琴に 似た 音色を 奏でる。"
	},
	attacks: [
		{
			name: {
				ja: "むしのよかん"
			},
			effect: {
				ja: "自分の山札から草ポケモンを3枚まで選び、相手に見せてから、手札に加える。そして山札を切る。"
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
