import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "マホイップ"
	},
	rarity: "Uncommon",
	illustrator: "Mizue",
	category: "Pokemon",
	hp: 110,
	types: [
		"Psychic"
	],
	stage: "Stage1",
	dexId: [
		869
	],
	description: {
		ja: "信頼する トレーナーには クリームで デコレーションした 木の実を ふるまって くれるのだ。"
	},
	attacks: [
		{
			name: {
				ja: "デコレーション"
			},
			effect: {
				ja: "自分の手札から基本エネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "ドレインキッス"
			},
			effect: {
				ja: "このポケモンのHPを「30」回復する。"
			},
			cost: [
				"Psychic",
				"Colorless"
			],
			damage: 50
		}
	],
	evolveFrom: {
		ja: "マホミル"
	},
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "D",
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
