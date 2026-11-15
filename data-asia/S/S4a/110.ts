import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 蛇紋熊",
		ja: "ガラル ジグザグマ"
	},

	illustrator: "kirisAki",

	category: "Pokemon",

	hp: 70,

	types: [
		"Darkness"
	],

	description: {
		'zh-tw': "一直在奔跑，永遠靜不下來。如果發現了其他的寶可夢，就會故意撞上去挑起事端。",
		ja: "この姿が いちばん 古い ジグザグマの 姿 らしい。 ジグザグ動いて あたりを 荒らす。"
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "煩躁頭擊",
				ja: "かんしゃくヘッド"
			},
			effect: {
				'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。在對手的1隻寶可夢身上放置1個傷害指示物。",
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。相手のポケモン1匹に、ダメカンを1個のせる。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "偷襲",
				ja: "ふいをつく"
			},
			effect: {
				'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
				ja: "コインを1回投げウラなら、このワザは失敗。"
			},
			damage: 30,
			cost: [
				"Darkness",
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

	rarity: "None",

	dexId: [
		263
	]
}

export default card
