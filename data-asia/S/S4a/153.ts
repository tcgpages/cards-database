import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毛毛角羊",
		ja: "バイウールー"
	},

	illustrator: "You Iribi",

	category: "Pokemon",

	hp: 130,

	types: [
		"Colorless"
	],

	description: {
		'zh-tw': "用牠那彈力十足的毛織成的地毯就像是彈簧墊，可以站上去蹦蹦跳。",
		ja: "立派に 伸びた ツノは 異性に アピールするために 生えている。 武器として 使うことはない。"
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "棉花防守",
				ja: "コットンガード"
			},
			effect: {
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。"
			},
			damage: 30,
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "捨身衝撞",
				ja: "すてみタックル"
			},
			effect: {
				'zh-tw': "這隻寶可夢也受到30點傷害。",
				ja: "このポケモンにも30ダメージ。"
			},
			damage: 120,
			cost: [
				"Colorless",
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

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		832
	]
}

export default card
