import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮皮",
		ja: "ピッピ"
	},

	illustrator: "sowsow",

	category: "Pokemon",

	hp: 60,

	types: [
		"Psychic"
	],

	description: {
		'zh-tw': "據說如果在滿月的夜晚看見皮皮們聚在一起跳舞，就能得到幸福。",
		ja: "満月の夜 ピッピが 集まって ダンスを 踊るようすを 見ると しあわせに なれると 言われている。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "閃耀指",
				ja: "ひかるゆび"
			},
			effect: {
				'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
				ja: "相手のバトルポケモンをねむりにする。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "魔法射擊",
				ja: "マジカルショット"
			},
			damage: 10,
			cost: [
				"Psychic"
			]
		}
	],

	weaknesses: [
		{
			type: "Metal",
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
		35
	]
}

export default card
