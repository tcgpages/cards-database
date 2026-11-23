import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "レントラー"
	},
	rarity: "Rare",
	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 160,
	types: [
		"Lightning"
	],
	stage: "Stage2",
	dexId: [
		405
	],
	description: {
		ja: "レントラーの 透視能力は 危険な ものを 発見するとき とても 役に立つのだ。"
	},
	attacks: [
		{
			name: {
				ja: "しゅうげき"
			},
			effect: {
				ja: "この番、このポケモンが「ルクシオ」から進化していたなら、100ダメージ追加。"
			},
			cost: [
				"Lightning"
			],
			damage: "60+"
		},
		{
			name: {
				ja: "ヘッドボルト"
			},
			cost: [
				"Lightning",
				"Colorless"
			],
			damage: 120
		}
	],
	evolveFrom: {
		ja: "ルクシオ"
	},
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "D",
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
