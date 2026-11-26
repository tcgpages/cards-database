import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毒電嬰",
		ja: "エレズン"
	},

	illustrator: "Akira Komayama",

	category: "Pokemon",

	hp: 70,

	types: [
		"Lightning"
	],

	description: {
		'zh-tw': "會從皮膚把體內的毒囊裡儲存著的毒素分泌出來。一旦觸碰牠就會感到麻麻的。",
		ja: "体内の 毒袋に 溜めた 毒素を 皮膚から 分泌。 触ると ピリピリと 痺れる。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "巴掌",
				ja: "ビンタ"
			},
			damage: 10,
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "劈哩啪啦",
				ja: "バチバチ"
			},
			damage: 20,
			cost: [
				"Lightning",
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

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		848
	]
}

export default card
