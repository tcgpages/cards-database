import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "多龍奇",
		ja: "ドロンチ"
	},

	illustrator: "Kouki Saitou",

	category: "Pokemon",

	hp: 90,

	types: [
		"Psychic"
	],

	description: {
		'zh-tw': "飛行速度為每小時２００公里。與多龍梅西亞一起戰鬥，到牠進化為止都會細心照顧。",
		ja: "飛行速度は 時速２００キロ。ドラメシヤと いっしょに 戦い 無事に 進化するまで 世話をする。"
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "召喚",
				ja: "よびだす"
			},
			effect: {
				'zh-tw': "從自己的牌庫選擇1張「多龍梅西亞」卡，放置於備戰區。並且重洗牌庫。",
				ja: "自分の山札から「ドラメシヤ」を1枚選び、ベンチに出す。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "咬住",
				ja: "かみつく"
			},
			damage: 40,
			cost: [
				"Psychic",
				"Psychic"
			]
		}
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		886
	]
}

export default card
