import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "吼吼鯨",
		ja: "ホエルコ"
	},

	illustrator: "Yukiko Baba",

	category: "Pokemon",

	hp: 100,

	types: [
		"Water"
	],

	description: {
		'zh-tw': "把喝入的海水從眼睛上方的鼻孔中噴出來吸引他人。每天要吃１噸弱丁魚。",
		ja: "飲みこんだ 海水を 目の 上の 鼻の 穴から 噴き出し アピール。 毎日 １トンの ヨワシを 食う。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "水炮",
				ja: "ハイドロポンプ"
			},
			effect: {
				'zh-tw': "增加這隻寶可夢身上附加的【水】能量的數量×20點傷害。",
				ja: "このポケモンについている水エネルギーの数×20ダメージ追加。"
			},
			damage: "10+",
			cost: [
				"Colorless",
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

	retreat: 3,

	regulationMark: "D",

	rarity: "Common",

	dexId: [
		320
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
