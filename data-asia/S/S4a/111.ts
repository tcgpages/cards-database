import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 直衝熊",
		ja: "ガラル マッスグマ"
	},

	illustrator: "nagimiso",

	category: "Pokemon",

	hp: 100,

	types: [
		"Darkness"
	],

	description: {
		'zh-tw': "會用長舌頭挑釁獵物。一旦獵物被自己激怒，便會猛烈地衝撞上去。",
		ja: "とても 好戦的な 性質。 自分より 格上の 相手にも 平気で 挑む むこうみず。"
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "暗襲要害",
				ja: "つじぎり"
			},
			effect: {
				'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
				ja: "このポケモンをベンチポケモンと入れ替える。"
			},
			damage: 20,
			cost: [
				"Darkness"
			]
		},
		{
			name: {
				'zh-tw': "頭突",
				ja: "ぶちかます"
			},
			damage: 70,
			cost: [
				"Darkness",
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		264
	]
}

export default card
