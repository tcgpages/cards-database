import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "レシラムEX"
	},
	illustrator: "Shizurow",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		643
	],
	hp: 180,
	types: [
		"Fire"
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "かがやくツメ"
			},
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージを追加。"
			},
			cost: [
				"Fire",
				"Colorless",
				"Colorless"
			],
			damage: "50+"
		},
		{
			name: {
				ja: "ブレイブファイヤー"
			},
			effect: {
				ja: "コインを1回投げウラなら、このポケモンにも50ダメージ。"
			},
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless"
			],
			damage: 150
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 3,
	variants: [
		{
			type: "holo",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "holo"
		}
	]
}

export default card
