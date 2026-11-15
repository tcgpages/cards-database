import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "堅果啞鈴",
		ja: "ナットレイ"
	},

	illustrator: "Miki Tanaka",

	category: "Pokemon",

	hp: 110,

	types: [
		"Metal"
	],

	description: {
		'zh-tw': "用尖刺刺裂岩壁之後，牠會用觸手的尖端接觸裂縫吸收營養。",
		ja: "トゲで 岩盤に キズを つけると 触手の 先端を あてて 栄養を 吸収する。"
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "嗡嗡橫掃",
				ja: "ぶんぶんスイング"
			},
			effect: {
				'zh-tw': "造成這隻寶可夢身上附加的【鋼】能量的數量×30點傷害。將這隻寶可夢與備戰寶可夢互換。",
				ja: "このポケモンについている鋼エネルギーの数×30ダメージ。このポケモンをベンチポケモンと入れ替える。"
			},
			damage: "30×",
			cost: [
				"Metal"
			]
		}
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		}
	],

	retreat: 3,

	regulationMark: "D",

	rarity: "Uncommon",

	dexId: [
		598
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
