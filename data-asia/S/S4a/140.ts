import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "百變怪V",
		ja: "メタモンV"
	},

	illustrator: "Saki Hayashiro",

	category: "Pokemon",

	hp: 170,

	types: [
		"Colorless"
	],

	stage: "Basic",

	suffix: "V",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "V變化",
				ja: "Vへんげ"
			},
			effect: {
				'zh-tw': "在自己的回合時可使用1次。從自己的棄牌區選擇1張【基礎】寶可夢的「寶可夢【V】」卡，與這隻寶可夢互換（所附加的卡・傷害指示物・特殊狀態・效果等全部保留）。將這隻寶可夢丟棄。",
				ja: "自分の番に1回使える。自分のトラッシュからたねポケモンの「ポケモンV」を1枚選び、このポケモンと入れ替える（ついているカード・ダメカン・特殊状態・効果などは、すべて引きつぐ）。このポケモンは、トラッシュする。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "輕黏",
				ja: "ペタッとつく"
			},
			effect: {
				'zh-tw': "從自己的棄牌區選擇1張基本能量卡，附於這隻寶可夢身上。",
				ja: "自分のトラッシュから基本エネルギーを1枚選び、このポケモンにつける。"
			},
			cost: [
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "Holo Rare V",

	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
