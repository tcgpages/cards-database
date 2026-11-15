import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "マナフィEX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: [
		"Water"
	],
	stage: "Basic",
	suffix: "EX",
	abilities: [
		{
			name: {
				ja: "アクアチューブ"
			},
			effect: {
				ja: "このポケモンがいるかぎり、水エネルギーがついている自分のポケモン全員のにげるために必要なエネルギーは、すべてなくなる。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ミネラルポンプ"
			},
			effect: {
				ja: "自分のベンチポケモン全員のHPを、それぞれ「30」回復する。"
			},
			cost: [
				"Water",
				"Water"
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
	retreat: 1,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
