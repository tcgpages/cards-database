import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "水水獺",
		ja: "ミジュマル"
	},

	illustrator: "nagimiso",

	category: "Pokemon",

	hp: 70,

	types: [
		"Water"
	],

	description: {
		'zh-tw': "用腹部的扇貝貝戰鬥。擋住攻擊後，能迅速地斬切對手反擊。",
		ja: "お腹の ホタチで 戦う。 攻撃を 受け止めてから すかさず 切りつけて 反撃するのだ。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "水槍",
				ja: "みずでっぽう"
			},
			damage: 10,
			cost: [
				"Water"
			]
		},
		{
			name: {
				'zh-tw': "硬殼攻擊",
				ja: "シェルアタック"
			},
			damage: 20,
			cost: [
				"Water",
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

	rarity: "Common",

	dexId: [
		501
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
