import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毛辮羊",
		ja: "ウールー"
	},

	illustrator: "Mitsuhiro Arita",

	category: "Pokemon",

	hp: 70,

	types: [
		"Colorless"
	],

	description: {
		'zh-tw': "捲捲的體毛彈性十足。就算從懸崖上掉下去，也不會受傷。",
		ja: "毛が 伸びすぎると 動けない。 ウールーの 体毛で 織られた 布は 驚くほど 丈夫。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "膨脹",
				ja: "ふくらむ"
			},
			effect: {
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-10」點。",
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-10」される。"
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
		831
	]
}

export default card
