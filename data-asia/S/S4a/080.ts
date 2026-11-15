import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "布莉姆溫",
		ja: "ブリムオン"
	},

	illustrator: "Kagemaru Himeno",

	category: "Pokemon",

	hp: 150,

	types: [
		"Psychic"
	],

	description: {
		'zh-tw': "由於會朝四周釋放足以引起頭痛的精神力量，其他生物都躲得遠遠的。",
		ja: "頭痛になるほどの サイコパワーを 周囲に 放って ほかの 生物を 遠ざけているのだ。"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "意志尖帽",
				ja: "マインドハット"
			},
			effect: {
				'zh-tw': "在自己的回合時，可使用1次。雙方玩家各選擇1張自己的手牌，將其丟棄。（對手先丟棄。沒有手牌的玩家不丟棄。）",
				ja: "自分の番に1回使える。おたがいのプレイヤーは、それぞれ自分の手札を1枚選び、トラッシュする。（トラッシュは相手から行う。手札がないプレイヤーはトラッシュしない。）"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "悔恨水滴",
				ja: "むねんのしずく"
			},
			effect: {
				'zh-tw': "將與自己的棄牌區的寶可夢的張數相同數量的傷害指示物，放置於對手的戰鬥寶可夢身上。",
				ja: "自分のトラッシュにあるポケモンの枚数ぶんのダメカンを、相手のバトルポケモンにのせる。"
			},
			cost: [
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

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		858
	]
}

export default card
