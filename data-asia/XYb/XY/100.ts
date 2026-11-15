import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "イーブイ"
	},
	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		133
	],
	description: {
		ja: "不安定な 遺伝子の おかげで さまざまな 進化の 可能性を 秘めている 特殊な ポケモン。"
	},
	attacks: [
		{
			name: {
				ja: "たいあたり"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		},
		{
			name: {
				ja: "とびかかる"
			},
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
			foil: "mirror"
		}
	]
}

export default card
