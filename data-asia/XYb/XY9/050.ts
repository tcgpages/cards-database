import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ガバイト"
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: [
		"Fighting"
	],
	evolveFrom: {
		ja: "フカマル"
	},
	stage: "Stage1",
	dexId: [
		444
	],
	description: {
		ja: "巣穴を 広げるとき 地中から 出てきた 宝石の 原石を 巣に ためる 習性を 持つ。"
	},
	attacks: [
		{
			name: {
				ja: "すなじごく"
			},
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
			},
			cost: [
				"Fighting"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Grass",
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
