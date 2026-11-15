import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "螺釘地鼠",
		ja: "モグリュー"
	},

	illustrator: "Yuka Morii",

	category: "Pokemon",

	hp: 70,

	types: [
		"Fighting"
	],

	description: {
		'zh-tw': "會將雙掌上的爪子併攏，並讓身體高速旋轉，瞄準獵物衝過去。",
		ja: "両手の ツメを 重ね合わせ 体を 高速回転 させると 獲物 めがけて 突っ込むのだ。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "抓",
				ja: "ひっかく"
			},
			damage: 10,
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "真氣突刺",
				ja: "きあいづき"
			},
			effect: {
				'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
				ja: "コインを1回投げウラなら、このワザは失敗。"
			},
			damage: 50,
			cost: [
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "Common",

	dexId: [
		529
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
