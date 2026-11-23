import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "耿鬼",
		ja: "ゲンガー"
	},

	illustrator: "Shibuzoh.",

	category: "Pokemon",

	hp: 110,

	types: [
		"Psychic"
	],

	description: {
		'zh-tw': "滿月的夜晚，如果影子自己動起來並露出笑容，那肯定是耿鬼搞的鬼。",
		ja: "満月の夜 影が 勝手に 動きだして 笑うのは ゲンガーの しわざに 違いない。"
	},

	evolveFrom: {
		ja: "ゴースト"
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "生命混合器",
				ja: "ライフシェイカー"
			},
			effect: {
				'zh-tw': "在自己的回合時，可不限次數使用。選擇1個自己的場上的【超】寶可夢身上放置的傷害指示物，改放於自己的其他【超】寶可夢身上。",
				ja: "自分の番に何回でも使える。自分の場の超ポケモンにのっているダメカンを1個選び、自分の別の超ポケモンにのせ替える。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "催眠波動",
				ja: "さいみんはどう"
			},
			effect: {
				'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
				ja: "相手のバトルポケモンをねむりにする。"
			},
			damage: 90,
			cost: [
				"Psychic",
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

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "holo", languages: ["ja"] }
	],

	dexId: [
		94
	]
}

export default card
