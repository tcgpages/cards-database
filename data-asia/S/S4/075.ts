import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 喵喵",
		ja: "ガラル ニャース"
	},

	illustrator: "Kouki Saitou",

	category: "Pokemon",

	hp: 70,

	types: [
		"Metal"
	],

	description: {
		'zh-tw': "和好戰的海洋民族一起生活，久而久之身體的各個地方就都變成了黑鐵。",
		ja: "戦闘的な 海洋民族と 暮らすうちに 鍛えられ 体の あちこちが 黒鉄に 変化した。"
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
				"Metal"
			]
		},
		{
			name: {
				'zh-tw': "亂抓",
				ja: "みだれひっかき"
			},
			effect: {
				'zh-tw': "擲3次硬幣，造成正面出現的次數×20點傷害。",
				ja: "コインを3回投げ、オモテの数×20ダメージ。"
			},
			damage: "20×",
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

	rarity: "Common",

	dexId: [
		52
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
