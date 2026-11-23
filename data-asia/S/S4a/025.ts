import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "燒火蚣",
		ja: "ヤクデ"
	},

	illustrator: "Akira Komayama",

	category: "Pokemon",

	hp: 70,

	types: [
		"Fire"
	],

	description: {
		'zh-tw': "靠儲存在體內的可燃氣體來發熱。熱度最高的是腹部的黃色部分。",
		ja: "体に 溜めた 可燃ガスで 発熱。 とくに お腹の 黄色い 部分が 熱いのだ。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "咬住",
				ja: "かみつく"
			},
			damage: 10,
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "烈焰",
				ja: "かえん"
			},
			damage: 50,
			cost: [
				"Fire",
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		850
	]
}

export default card
