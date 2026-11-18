import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "勾魂眼",
		ja: "ヤミラミ"
	},

	illustrator: "KEIICHIRO ITO",

	category: "Pokemon",

	hp: 70,

	types: [
		"Darkness"
	],

	description: {
		'zh-tw': "寶石的眼睛發出詭異光芒時，就會攝取人的魂魄。是令人恐懼的寶可夢。",
		ja: "宝石の 瞳が 怪しく 輝くとき 人の 魂を 奪うと 恐れられる ポケモン。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "偷盜",
				ja: "くすねる"
			},
			effect: {
				'zh-tw': "從自己的牌庫抽出1張卡。",
				ja: "自分の山札を1枚引く。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "無理取鬧",
				ja: "いちゃもん"
			},
			effect: {
				'zh-tw': "選擇對手的戰鬥寶可夢持有的1個招式。在下個對手的回合，受到這個招式的寶可夢無法使用被選擇的招式。",
				ja: "相手のバトルポケモンが持っているワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザが使えない。"
			},
			damage: 30,
			cost: [
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

	retreat: 1,

	regulationMark: "D",

	rarity: "Common",

	dexId: [
		302
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
