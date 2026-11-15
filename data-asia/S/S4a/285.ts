import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ニャース"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: [
		"Metal"
	],
	stage: "Basic",
	dexId: [
		52
	],
	description: {
		ja: "戦闘的な 海洋民族と 暮らすうちに 鍛えられ 体の あちこちが 黒鉄に 変化した。"
	},
	abilities: [
		{
			name: {
				ja: "しんかのおたけび"
			},
			effect: {
				ja: "自分の番に、自分の手札を2枚トラッシュするなら、1回使える。自分の山札から「ガラル ニャイキング」を1枚選び、相手に見せて、手札に加える。そして山札を切る。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ひっかく"
			},
			cost: [
				"Metal",
				"Colorless"
			],
			damage: 20
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
	retreat: 2,
	regulationMark: "D",
	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
