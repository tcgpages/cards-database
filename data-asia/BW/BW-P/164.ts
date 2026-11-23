import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ケルディオ"
	},
	variants: [{ type: "reverse" }],
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 90,
	types: [
		"Water"
	],
	stage: "Basic",
	dexId: [
		647
	],
	description: {
		ja: "覚悟を 決めることで 全身に 力が みなぎって すばやくなり 飛び跳ねると 残像が みえる。"
	},
	attacks: [
		{
			name: {
				ja: "つるぎのまい"
			},
			effect: {
				ja: "次の自分の番、このポケモンが使う「アクアブレード」のダメージは「120」になる。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "アクアブレード"
			},
			cost: [
				"Water",
				"Water",
				"Colorless"
			],
			damage: 60
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
