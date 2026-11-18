import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "種子鐵球",
		ja: "テッシード"
	},

	illustrator: "HYOGONOSUKE",

	category: "Pokemon",

	hp: 60,

	types: [
		"Metal"
	],

	description: {
		'zh-tw': "會發射尖刺來保護自己。需要反覆訓練才能將尖刺準確地射中目標。",
		ja: "棘を 飛ばして 身を 守る。 狙った 方向に 飛ばすには たくさんの 訓練が 必要。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "反動",
				ja: "はんどう"
			},
			effect: {
				'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
				ja: "このポケモンをベンチポケモンと入れ替える。"
			},
			damage: 10,
			cost: [
				"Metal"
			]
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
			type: "Grass",
			value: "-30"
		}
	],

	retreat: 3,

	regulationMark: "D",

	rarity: "Common",

	dexId: [
		597
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
