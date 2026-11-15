import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ゼクロムEX"
	},
	illustrator: "Shizurow",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		644
	],
	hp: 180,
	types: [
		"Lightning"
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
				"Lightning",
				"Colorless",
				"Colorless"
			],
			damage: "50+"
		},
		{
			name: {
				ja: "ストロングボルト"
			},
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。"
			},
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless"
			],
			damage: 150
		}
	],
	weaknesses: [
		{
			type: "Fighting",
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
