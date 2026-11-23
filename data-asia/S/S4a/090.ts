import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 大蔥鴨",
		ja: "ガラル カモネギ"
	},

	illustrator: "Akira Komayama",

	category: "Pokemon",

	hp: 80,

	types: [
		"Fighting"
	],

	description: {
		'zh-tw': "生活在伽勒爾的大蔥鴨。揮舞著又粗又壯的大蔥，是英勇奮戰的戰士。",
		ja: "ガラルに 棲む カモネギの 姿。 太く たくましい ネギを 振るい 勇敢に 戦う 戦士。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "碎岩",
				ja: "いわくだき"
			},
			effect: {
				'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。",
				ja: "コインを1回投げオモテなら、30ダメージ追加。"
			},
			damage: "10+",
			cost: [
				"Fighting"
			]
		},
		{
			name: {
				'zh-tw': "突刺",
				ja: "つきさす"
			},
			damage: 30,
			cost: [
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Psychic",
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
		83
	]
}

export default card
