import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "稚山雀",
		ja: "ココガラ"
	},

	illustrator: "Akira Komayama",

	category: "Pokemon",

	hp: 60,

	types: [
		"Colorless"
	],

	description: {
		'zh-tw': "性情勇敢，無論多強的敵人都勇於挑戰。即使在敵人的反擊中被打敗，也能從中得到鍛鍊。",
		ja: "どんな 強敵にも 挑みかかる 勇敢な 性質。 返り討ちに 遭いながらも 鍛えられていく。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "羽擊",
				ja: "はばたく"
			},
			damage: 10,
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "滑翔",
				ja: "かっくう"
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
			type: "Lightning",
			value: "×2"
		}
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		821
	]
}

export default card
