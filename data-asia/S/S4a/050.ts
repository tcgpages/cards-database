import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鰓魚龍",
		ja: "ウオノラゴン"
	},

	illustrator: "Hitoshi Ariga",

	category: "Pokemon",

	hp: 150,

	types: [
		"Water"
	],

	description: {
		'zh-tw': "超乎尋常的腳力和顎力讓牠在古代所向無敵。但由於捕盡獵物，導致牠們自己也滅絕了。",
		ja: "ずば抜けた 脚力と 顎の 力で 古代では 無敵だったが 獲物を 獲り尽くし 絶滅した。"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "原始之律",
				ja: "げんしのおきて"
			},
			effect: {
				'zh-tw': "只要這隻寶可夢在戰鬥場上，對手無法從手牌使出寶可夢並完成進化。",
				ja: "このポケモンがバトル場にいるかぎり、相手は手札からポケモンを出して進化させられない。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "頭突",
				ja: "ぶちかます"
			},
			damage: 120,
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],

	retreat: 3,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		882
	]
}

export default card
