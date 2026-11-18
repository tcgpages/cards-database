import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "タツベイ"
	},
	rarity: "Promo",
	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 50,
	types: [
		"Dragon"
	],
	stage: "Basic",
	dexId: [
		371
	],
	description: {
		ja: "大空を 飛ぶことを 夢見て 毎日 飛ぶ 練習のために ガケから 飛び降りている。"
	},
	attacks: [
		{
			name: {
				ja: "ずつき"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		},
		{
			name: {
				ja: "ドラゴンクロー"
			},
			cost: [
				"Fire",
				"Water"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
