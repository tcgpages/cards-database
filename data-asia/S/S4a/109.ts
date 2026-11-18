import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "叉字蝠VMAX",
		ja: "クロバットVMAX"
	},

	illustrator: "PLANETA Tsuji",

	category: "Pokemon",

	hp: 300,

	types: [
		"Darkness"
	],

	stage: "VMAX",

	attacks: [
		{
			name: {
				'zh-tw': "隱形毒液",
				ja: "ステルスポイズン"
			},
			effect: {
				'zh-tw': "將對手的戰鬥寶可夢【中毒】。將這隻寶可夢與備戰寶可夢互換。",
				ja: "相手のバトルポケモンをどくにする。このポケモンをベンチポケモンと入れ替える。"
			},
			damage: 70,
			cost: [
				"Darkness",
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "極巨利刃",
				ja: "ダイカッター"
			},
			damage: 180,
			cost: [
				"Darkness",
				"Darkness",
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

	retreat: 1,

	regulationMark: "D",

	rarity: "Holo Rare VMAX",

	suffix: "VMAX",

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
