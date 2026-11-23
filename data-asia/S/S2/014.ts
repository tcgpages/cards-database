import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ブーバー"
	},
	rarity: "Common",
	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 90,
	types: [
		"Fire"
	],
	stage: "Basic",
	dexId: [
		126
	],
	description: {
		ja: "全身が 燃えていて 息を するだけでも 熱い。 くしゃみと 同時に 炎が 噴きだすぞ。"
	},
	attacks: [
		{
			name: {
				ja: "パンチ"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		},
		{
			name: {
				ja: "ヒートブレス"
			},
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージ追加。"
			},
			cost: [
				"Fire",
				"Colorless"
			],
			damage: "20+"
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 2,
	regulationMark: "D",
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
