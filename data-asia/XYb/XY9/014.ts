import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ヤドラン"
	},
	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: [
		"Water"
	],
	stage: "Stage1",
	dexId: [
		80
	],
	description: {
		ja: "ヤドンが 海へ エサを 取りにいったとき シェルダーに 尻尾を かまれ ヤドランになった。"
	},
	attacks: [
		{
			name: {
				ja: "うっかりヘッド"
			},
			effect: {
				ja: "コインを1回投げオモテなら、50ダメージを追加。"
			},
			cost: [
				"Water"
			],
			damage: "10+"
		},
		{
			name: {
				ja: "ミラクルホームラン"
			},
			effect: {
				ja: "このワザを使ったとき、自分のサイドの残り枚数が1枚なら、この対戦は自分の勝ちになる。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
