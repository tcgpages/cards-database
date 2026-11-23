import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "マホイップ"
	},
	illustrator: "MAHOU",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 110,
	types: [
		"Psychic"
	],
	evolveFrom: {
		ja: "マホミル"
	},
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
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
