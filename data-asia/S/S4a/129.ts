import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "獨劍鞘",
		ja: "ヒトツキ"
	},

	illustrator: "Sekio",

	category: "Pokemon",

	hp: 60,

	types: [
		"Metal"
	],

	description: {
		'zh-tw': "很久以前因這把劍而喪命之人的靈魂成為了獨劍鞘的靈魂。",
		ja: "大昔 この 剣に よって 殺された 人間の 魂が ヒトツキの 魂に なっている。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "利刃切割",
				ja: "スライスブレード"
			},
			damage: 30,
			cost: [
				"Metal",
				"Colorless"
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

	retreat: 1,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		679
	]
}

export default card
