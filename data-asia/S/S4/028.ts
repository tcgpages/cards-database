import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "刺梭魚",
		ja: "サシカマス"
	},

	illustrator: "Hitoshi Ariga",

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
				'zh-tw': "群聚",
				ja: "むれる"
			},
			effect: {
				'zh-tw': "從自己的牌庫選擇最多2張「刺梭魚」卡，放置於備戰區。並且重洗牌庫。",
				ja: "自分の山札から「サシカマス」を2枚まで選び、ベンチに出す。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "啄",
				ja: "つつく"
			},
			damage: 20,
			cost: [
				"Water",
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

	retreat: 1,

	regulationMark: "D",

	rarity: "Common",

	dexId: [
		846
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
