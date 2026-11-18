import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "流氓鱷",
		ja: "ワルビアル"
	},

	illustrator: "Ryuta Fuse",

	category: "Pokemon",

	hp: 150,

	types: [
		"Darkness"
	],

	description: {
		'zh-tw': "會藏身在沙漠蜻蜓引發的沙暴中，靜靜等待著獵物的到來。",
		ja: "フライゴンの 起こす 砂嵐に 身を 潜めて 獲物が くるのを じっと 待ちかまえている。"
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				'zh-tw': "亂挖",
				ja: "ほりあらす"
			},
			effect: {
				'zh-tw': "將對手的牌庫上方3張卡丟棄。",
				ja: "相手の山札を上から3枚トラッシュする。"
			},
			cost: [
				"Colorless",
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "暴走",
				ja: "あばれまわる"
			},
			effect: {
				'zh-tw': "將這隻寶可夢【混亂】。",
				ja: "このポケモンをこんらんにする。"
			},
			damage: 180,
			cost: [
				"Darkness",
				"Colorless",
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

	retreat: 3,

	regulationMark: "D",

	rarity: "Uncommon",

	dexId: [
		553
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
