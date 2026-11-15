import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "銅象",
		ja: "ゾウドウ"
	},

	illustrator: "Akira Komayama",

	category: "Pokemon",

	hp: 100,

	types: [
		"Metal"
	],

	description: {
		'zh-tw': "能輕鬆舉起重達５噸的貨物的大力士寶可夢。會用鼻子挖地。",
		ja: "５トンの 荷物を もっても 平気な 力持ち ポケモン。 鼻を 使って 土を 掘る。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "怪力",
				ja: "かいりき"
			},
			damage: 60,
			cost: [
				"Metal",
				"Colorless",
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

	retreat: 3,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		878
	]
}

export default card
