import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "マナフィEX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 120,
	types: [
		"Water"
	],
	dexId: [
		490
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
		},
		{
			type: "holo",
			stamp: ["1st-edition"]
		}
	]
}

export default card
