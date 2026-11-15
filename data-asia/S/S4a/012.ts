import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "天罩蟲",
		ja: "レドームシ"
	},

	illustrator: "Misa Tsutsui",

	category: "Pokemon",

	hp: 70,

	types: [
		"Grass"
	],

	description: {
		'zh-tw': "雖然幾乎從來不動但還是活著的。牠的超能力似乎是在縮在殼裡不吃不喝的過程中覺醒的。",
		ja: "殻の 中で 成長中。 サイコパワーで 外の 様子を うかがい 進化に 備えている。"
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "反射壁",
				ja: "リフレクター"
			},
			effect: {
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-40」點。",
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-40」される。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "衝撞",
				ja: "ぶつかる"
			},
			damage: 30,
			cost: [
				"Grass",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		825
	]
}

export default card
