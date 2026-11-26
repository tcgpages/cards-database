import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル デスバーン"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 100,
	types: [
		"Fighting"
	],
	evolveFrom: {
		ja: "ガラル デスマス"
	},
	stage: "Stage1",
	dexId: [
		867
	],
	description: {
		ja: "強い 呪いを こめて 描かれた 古代の 絵が デスマスの 魂を 取り込み 動きだした。"
	},
	attacks: [
		{
			name: {
				ja: "うらみをばらまく"
			},
			effect: {
				ja: "この「ガラル デスバーン」にのっているダメカンの数×2個ぶんのダメカンを、相手のポケモンに好きなようにのせる。"
			},
			cost: [
				"Colorless",
				"Colorless"
			]
		},
		{
			name: {
				ja: "マッドハンマー"
			},
			effect: {
				ja: "このポケモンにも30ダメージ。"
			},
			cost: [
				"Fighting",
				"Colorless",
				"Colorless"
			],
			damage: 120
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
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
