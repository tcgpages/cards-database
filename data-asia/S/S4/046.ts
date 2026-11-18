import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "風鈴鈴",
		ja: "チリーン"
	},

	illustrator: "Asako Ito",

	category: "Pokemon",

	hp: 70,

	types: [
		"Psychic"
	],

	description: {
		'zh-tw': "擁有超音波的叫聲。輕飄飄地浮起來，乘著風旅行到遠方。",
		ja: "超音波の 鳴き声を 持つ。 ふわふわと 浮かび 風に 乗って 長い 距離を 旅する。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "心動音色",
				ja: "ときめくねいろ"
			},
			effect: {
				'zh-tw': "從自己的牌庫選擇寶可夢卡與支援者卡各1張，在給對手看過後加入手牌。並且重洗牌庫。",
				ja: "自分の山札からポケモンとサポートを1枚ずつ選び、相手に見せて、手札に加える。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "催眠波動",
				ja: "さいみんはどう"
			},
			effect: {
				'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
				ja: "相手のバトルポケモンをねむりにする。"
			},
			damage: 30,
			cost: [
				"Psychic",
				"Colorless"
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

	retreat: 1,

	regulationMark: "D",

	rarity: "Common",

	dexId: [
		358
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
