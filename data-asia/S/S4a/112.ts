import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 堵攔熊",
		ja: "ガラル タチフサグマ"
	},

	illustrator: "Hasuno",

	category: "Pokemon",

	hp: 160,

	types: [
		"Darkness"
	],

	description: {
		'zh-tw': "能夠發出驚人的音量。牠在大叫的同時威嚇對手的樣子被稱為「攔堵」。",
		ja: "ケンカを 繰り返し 進化。 腕をクロスし 叫ぶ 雄叫びは どんな 相手も 怯ませるぞ。"
	},

	evolveFrom: {
		ja: "ガラル マッスグマ"
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "暴躁嚎叫",
				ja: "あらくれシャウト"
			},
			effect: {
				'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。在對手的1隻寶可夢身上放置3個傷害指示物。",
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のポケモン1匹に、ダメカンを3個のせる。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "攔堵",
				ja: "ブロッキング"
			},
			effect: {
				'zh-tw': "在下個對手的回合，這隻寶可夢不會受到【基礎】寶可夢招式的傷害。",
				ja: "次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。"
			},
			damage: 90,
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

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "holo", languages: ["ja"] }
	],

	dexId: [
		862
	]
}

export default card
