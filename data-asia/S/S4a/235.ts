import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ウオノラゴン"
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 150,
	types: [
		"Water"
	],
	evolveFrom: {
		ja: "めずらしい化石"
	},
	stage: "Stage1",
	dexId: [
		882
	],
	description: {
		ja: "ずば抜けた 脚力と 顎の 力で 古代では 無敵だったが 獲物を 獲り尽くし 絶滅した。"
	},
	abilities: [
		{
			name: {
				ja: "げんしのおきて"
			},
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手は手札からポケモンを出して進化させられない。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ぶちかます"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: 120
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 3,
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
