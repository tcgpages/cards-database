import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ジヘッド"
	},
	illustrator: "Yukiko Baba",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		634
	],
	hp: 80,
	types: [
		"Dragon"
	],
	stage: "Stage1",
	description: {
		ja: "縄張りの エサを 食べつくすと ほかの 土地へ 移動する。 ２つの 頭は 仲が 悪い。"
	},
	attacks: [
		{
			name: {
				ja: "かみくだく"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "ドラゴンクロー"
			},
			cost: [
				"Psychic",
				"Darkness",
				"Darkness"
			],
			damage: 80
		}
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		}
	],
	retreat: 2,
	evolveFrom: {
		ja: "サザンドラBREAK"
	},
	variants: [
		{
			type: "normal",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "normal"
		},
		{
			type: "reverse",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "reverse"
		}
	]
}

export default card
