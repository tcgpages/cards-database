import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "刺梭魚",
		ja: "サシカマス"
	},

	illustrator: "Mina Nakai",

	category: "Pokemon",

	hp: 60,

	types: [
		"Water"
	],

	description: {
		'zh-tw': "尖銳的下巴是牠的驕傲。只要發現周圍有什麼小動作，就會一直線衝過去。",
		ja: "鋭く 尖った 顎が 自慢。 少しでも 動くものを 見つけると 一直線に 突撃する。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "潑水",
				ja: "みずかけ"
			},
			damage: 20,
			cost: [
				"Water"
			]
		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		846
	]
}

export default card
