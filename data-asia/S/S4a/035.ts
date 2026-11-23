import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "美納斯",
		ja: "ミロカロス"
	},

	illustrator: "AKIRA EGAWA",

	category: "Pokemon",

	hp: 120,

	types: [
		"Water"
	],

	description: {
		'zh-tw': "也被稱為是最美的寶可夢。一直以來為無數的藝術家提供了靈感。",
		ja: "もっとも 美しい ポケモンとも 呼ばれ 多くの 芸術家に インスピレーションを 与えてきた。"
	},

	evolveFrom: {
		ja: "ヒンバス"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "光明治癒",
				ja: "ブライトヒール"
			},
			effect: {
				'zh-tw': "在自己的回合時，可使用1次。將自己的所有寶可夢各恢復「20」HP。",
				ja: "自分の番に1回使える。自分のポケモン全員のHPを、それぞれ「20」回復する。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "衝浪",
				ja: "なみのり"
			},
			damage: 80,
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

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "holo", languages: ["ja"] }
	],

	dexId: [
		350
	]
}

export default card
