import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "バクーダEX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "None",
	category: "Pokemon",
	hp: 180,
	types: [
		"Fire"
	],
	dexId: [
		323
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "ローリングアタック"
			},
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージを追加。"
			},
			cost: [
				"Fire",
				"Colorless"
			],
			damage: "30+"
		},
		{
			name: {
				ja: "ばくふんしゃ"
			},
			effect: {
				ja: "自分の場のポケモンについている炎エネルギーを好きなだけトラッシュし、トラッシュした枚数×50ダメージ。"
			},
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless"
			],
			damage: "50×"
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 4,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
