import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "フライゴン"
	},
	rarity: "Promo",
	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 140,
	types: [
		"Dragon"
	],
	stage: "Stage2",
	dexId: [
		330
	],
	description: {
		ja: "砂漠の精霊 と 呼ばれる。 はばたくことで 巻き起こした 砂あらしの 中に 隠れている。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "すなのまもり"
			},
			effect: {
				ja: "このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンが受けるダメージは「-40」される。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "パワーブラスト"
			},
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Grass",
				"Fighting",
				"Colorless"
			],
			damage: 120
		}
	],
	evolveFrom: {
		ja: "ビブラーバ"
	},
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
