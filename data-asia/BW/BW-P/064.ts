import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ゴチミル"
	},
	rarity: "Promo",
	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 80,
	types: [
		"Psychic"
	],
	stage: "Stage1",
	dexId: [
		575
	],
	description: {
		ja: "星明りが パワーの 源。 夜になると サイコパワーで 石を 浮かべて 星の 配置を 印す。"
	},
	attacks: [
		{
			name: {
				ja: "デリートアイ"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Psychic"
			]
		},
		{
			name: {
				ja: "ちょうねんりき"
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: 50
		}
	],
	evolveFrom: {
		ja: "ゴチム"
	},
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
