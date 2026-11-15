import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大王燕",
		ja: "オオスバメ"
	},

	illustrator: "kodama",

	category: "Pokemon",

	hp: 90,

	types: [
		"Colorless"
	],

	description: {
		'zh-tw': "發現居住在森林裡的獵物時，會從高空俯衝而下。用鋒利的爪子捕捉獵物。",
		ja: "森に 住む 獲物を 見つけると 上空から 急降下。 鋭い ツメで 捕まえる。"
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "電光一閃",
				ja: "でんこうせっか"
			},
			effect: {
				'zh-tw': "擲1次硬幣若為正面，則增加40點傷害。",
				ja: "コインを1回投げオモテなら、40ダメージ追加。"
			},
			damage: "20+",
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "能量支援",
				ja: "エネアシスト"
			},
			effect: {
				'zh-tw': "從自己的棄牌區選擇最多2張基本能量卡，附於1隻備戰寶可夢身上。",
				ja: "自分のトラッシュから基本エネルギーを2枚まで選び、ベンチポケモン1匹につける。"
			},
			damage: 40,
			cost: [
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

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		}
	],

	retreat: 0,

	regulationMark: "D",

	rarity: "Common",

	dexId: [
		277
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
