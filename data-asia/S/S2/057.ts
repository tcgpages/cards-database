import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル デスバーン"
	},
	rarity: "Uncommon",
	illustrator: "TOKIYA",
	category: "Pokemon",
	hp: 100,
	types: [
		"Fighting"
	],
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
	evolveFrom: {
		ja: "ガラル デスマス"
	},
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
