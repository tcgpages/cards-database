import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "醜醜魚",
		ja: "ヒンバス"
	},

	illustrator: "HYOGONOSUKE",

	category: "Pokemon",

	hp: 30,

	types: [
		"Water"
	],

	description: {
		'zh-tw': "外表醜陋，所以不受歡迎。擁有驚人的生命力，因而成為了研究對象。",
		ja: "見た目が 悪いので 人気はないが 脅威の 生命力が あり 研究対象には なっている。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "小憩",
				ja: "ひとやすみ"
			},
			effect: {
				'zh-tw': "將這隻寶可夢恢復「20」HP。",
				ja: "このポケモンのHPを「20」回復する。"
			},
			cost: [
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

	retreat: 1,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		349
	]
}

export default card
