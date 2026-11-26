import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "來電汪",
		ja: "ワンパチ"
	},

	illustrator: "Akira Komayama",

	category: "Pokemon",

	hp: 70,

	types: [
		"Lightning"
	],

	description: {
		'zh-tw': "奔跑的時候會從尾巴的根部製造出電能。在伽勒爾是很受歡迎的牧羊犬。",
		ja: "走る ときに しっぽの 根元から 電気を 生み出す。 ガラルでは 牧羊犬として 人気。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "吼叫",
				ja: "ほえる"
			},
			effect: {
				'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "劈哩啪啦",
				ja: "バチバチ"
			},
			damage: 10,
			cost: [
				"Lightning"
			]
		}
	],

	weaknesses: [
		{
			type: "Fighting",
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
		835
	]
}

export default card
