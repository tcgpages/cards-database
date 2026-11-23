import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 魔牆人偶",
		ja: "ガラル バリヤード"
	},

	illustrator: "Misa Tsutsui",

	category: "Pokemon",

	hp: 80,

	types: [
		"Water"
	],

	description: {
		'zh-tw': "擅長踢踏舞。會用冷氣製造出冰之地板並將其踢起，以此作為保護自己的障壁。",
		ja: "タップダンスが 得意。 冷気で つくった 氷の 床を 蹴り上げ バリヤーの ごとく 身を 守る。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "反射壁",
				ja: "リフレクター"
			},
			effect: {
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。"
			},
			cost: [
				"Water"
			]
		},
		{
			name: {
				'zh-tw': "雪花冰",
				ja: "スノーアイス"
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
		122
	]
}

export default card
