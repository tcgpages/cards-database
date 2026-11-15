import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ルクシオ"
	},
	rarity: "Promo",
	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 80,
	types: [
		"Lightning"
	],
	stage: "Stage1",
	dexId: [
		404
	],
	description: {
		ja: "鋭い ツメの 先には 強い 電気が 流れており ほんの少し かするだけで 相手を気絶させる。"
	},
	attacks: [
		{
			name: {
				ja: "せんこうだん"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをこんらんにする。"
			},
			cost: [
				"Lightning"
			],
			damage: 10
		},
		{
			name: {
				ja: "でんじスパーク"
			},
			effect: {
				ja: "相手のポケモンを1匹選び、40ダメージ。[ベンチへのダメージは弱点・抵抗力の計算をしない。]"
			},
			cost: [
				"Lightning",
				"Colorless",
				"Colorless"
			]
		}
	],
	evolveFrom: {
		ja: "コリンク"
	},
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
