import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "以歐路普VMAX",
		ja: "イオルブVMAX"
	},

	illustrator: "5ban Graphics",

	category: "Pokemon",

	hp: 310,

	types: [
		"Grass"
	],

	dexId: [
		826
	],
	evolveFrom: {
		ja: "イオルブV"
	},
	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "怪光線",
				ja: "かいこうせん"
			},
			effect: {
				'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。在對手的所有寶可夢身上各放置1個傷害指示物。",
				ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。相手のポケモン全員に、それぞれダメカンを1個のせる。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "超極巨波瀾壯闊",
				ja: "キョダイウェーブ"
			},
			effect: {
				'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×50點傷害。",
				ja: "相手のバトルポケモンについているエネルギーの数×50ダメージ追加。"
			},
			damage: "50+",
			cost: [
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

	rarity: "Holo Rare VMAX",


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
