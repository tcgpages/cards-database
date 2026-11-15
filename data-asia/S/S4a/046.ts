import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "戽斗尖梭",
		ja: "カマスジョー"
	},

	illustrator: "Kouki Saitou",

	category: "Pokemon",

	hp: 120,

	types: [
		"Water"
	],

	description: {
		'zh-tw': "像長矛一樣尖銳的下巴擁有鋼鐵般的硬度。據說牠的肉好吃得驚人。",
		ja: "槍のように 尖った 顎は 鋼の 硬さ。 その 身は 驚くほど 美味しいらしい。"
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "啄",
				ja: "つつく"
			},
			damage: 30,
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "螺旋飛衝",
				ja: "スクリュージェット"
			},
			effect: {
				'zh-tw': "將自己的手牌的2張【水】能量卡丟棄。若無法丟棄2張，則這個招式失敗。",
				ja: "自分の手札から水エネルギーを2枚トラッシュする。2枚トラッシュできないなら、このワザは失敗。"
			},
			damage: 130,
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

	dexId: [
		847
	]
}

export default card
