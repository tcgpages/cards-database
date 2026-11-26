import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烈箭鷹V",
		ja: "ファイアローV"
	},

	illustrator: "Ryota Murayama",

	category: "Pokemon",

	hp: 190,

	types: [
		"Fire"
	],

	dexId: [
		663
	],
	stage: "Basic",

	suffix: "V",

	attacks: [
		{
			name: {
				'zh-tw': "急速飛行",
				ja: "ファストフライト"
			},
			effect: {
				'zh-tw': "這個招式在先攻玩家的最初回合也可使用。將自己的手牌全部丟棄，從牌庫抽出6張卡。",
				ja: "このワザは、先攻プレイヤーの最初の番でも使える。自分の手札をすべてトラッシュし、山札を6枚引く。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "紅蓮之翼",
				ja: "ぐれんのつばさ"
			},
			effect: {
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			damage: 160,
			cost: [
				"Fire",
				"Fire",
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

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		}
	],

	retreat: 0,

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
