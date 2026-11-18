import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ネイティオ"
	},
	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		178
	],
	hp: 90,
	types: [
		"Psychic"
	],
	stage: "Stage1",
	description: {
		ja: "過去と 未来を 見通せる。 毎日 太陽の 動きを 見続けている 不思議な ポケモン。"
	},
	attacks: [
		{
			name: {
				ja: "フォーチュンドロー"
			},
			effect: {
				ja: "ジャンケンをして、勝ったプレイヤーは、自身の山札を3枚引く。負けたプレイヤーは、自身の山札を上から3枚トラッシュする。"
			},
			cost: [
				"Psychic"
			]
		},
		{
			name: {
				ja: "ミラクルウイング"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをこんらんにする。"
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: 60
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 1,
	evolveFrom: {
		ja: "ネイティ"
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
