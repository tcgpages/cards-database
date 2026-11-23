import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "萊希拉姆",
		ja: "レシラム"
	},

	illustrator: "PLANETA Tsuji",

	category: "Pokemon",

	hp: 120,

	types: [
		"Fire"
	],

	description: {
		'zh-tw': "一旦萊希拉姆的尾部燃燒，產生的熱能將會影響大氣，使世界的天氣發生變化。",
		ja: "レシラムの 尻尾が 燃えると 熱エネルギーで 大気が 動いて 世界の 天気が 変化する。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "奇幻火焰",
				ja: "アメイジングブレイズ"
			},
			effect: {
				'zh-tw': "這隻寶可夢也受到60點傷害。",
				ja: "このポケモンにも60ダメージ。"
			},
			damage: 270,
			cost: [
				"Fire",
				"Lightning",
				"Darkness"
			]
		}
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],

	retreat: 3,

	regulationMark: "D",

	rarity: "Amazing Rare",

	variants: [
		{ type: "holo", languages: ["ja"] }
	],

	dexId: [
		643
	]
}

export default card
