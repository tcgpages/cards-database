import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "幼棉棉",
		ja: "ヒメンカ"
	},

	illustrator: "Saya Tsuruta",

	category: "Pokemon",

	hp: 50,

	types: [
		"Grass"
	],

	description: {
		'zh-tw': "當牠把單腳紮進地面裡，並且沐浴充分的陽光，花瓣就會染上鮮豔的顏色。",
		ja: "そよ風で くるくる 回りながら 楽しそうに 歌う 愛らしさに 魅せられ 育てる 人が 多い。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "呼朋引伴",
				ja: "なかまをよぶ"
			},
			effect: {
				'zh-tw': "從自己的牌庫選擇最多3張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
				ja: "自分の山札からたねポケモンを3枚まで選び、ベンチに出す。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "飛葉快刀",
				ja: "はっぱカッター"
			},
			damage: 10,
			cost: [
				"Grass"
			]
		}
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		829
	]
}

export default card
