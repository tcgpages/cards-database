import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "熔岩蟲",
		ja: "マグマッグ"
	},

	illustrator: "Mina Nakai",

	category: "Pokemon",

	hp: 70,

	types: [
		"Fire"
	],

	description: {
		'zh-tw': "有著由熔岩構成的身體。如果不持續運動，身體就會因變冷而凝固。",
		ja: "溶岩で できた 体を 持つ。 絶えず 動いていないと 体が 冷えて 固まってしまうのだ。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "哈欠",
				ja: "あくび"
			},
			effect: {
				'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
				ja: "相手のバトルポケモンをねむりにする。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "火焰",
				ja: "ほのお"
			},
			damage: 30,
			cost: [
				"Fire",
				"Colorless",
				"Colorless"
			]
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

	rarity: "Common",

	dexId: [
		218
	],

	variants: [
		{
			type: "normal",
			languages: [
				"ja"
			]
		}
	]
}

export default card
