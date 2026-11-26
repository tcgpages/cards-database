import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "坐騎小羊",
		ja: "メェークル"
	},

	illustrator: "Saya Tsuruta",

	category: "Pokemon",

	hp: 70,

	types: [
		"Grass"
	],

	description: {
		'zh-tw': "只要有水與陽光，就能以背上的葉子產生能量，即使不吃東西也沒問題。",
		ja: "水と 太陽が あれば 背中の 葉っぱで エネルギーが 作れるので エサを 食べなくても 平気なのだ。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "光合作用",
				ja: "こうごうせい"
			},
			effect: {
				'zh-tw': "從自己的牌庫選擇1張【草】能量卡，附於自己的寶可夢身上。並且重洗牌庫。",
				ja: "自分の山札から草エネルギーを1枚選び、自分のポケモンにつける。そして山札を切る。"
			},
			cost: [
				"Grass"
			]
		},
		{
			name: {
				'zh-tw': "飛葉快刀",
				ja: "はっぱカッター"
			},
			damage: 50,
			cost: [
				"Grass",
				"Grass",
				"Colorless"
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

	rarity: "Common",

	dexId: [
		672
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
