import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ブラックキュレム"
	},
	variants: [{ type: "holo" }],
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 130,
	types: [
		"Dragon"
	],
	stage: "Basic",
	dexId: [
		646
	],
	description: {
		ja: "失った 体を 真実と 理想で 埋めてくれる 英雄を 待つ 氷の 伝説ポケモン。"
	},
	attacks: [
		{
			name: {
				ja: "デュアルクロー"
			},
			effect: {
				ja: "コインを2回投げ、オモテの数×20ダメージ。"
			},
			cost: [
				"Lightning",
				"Colorless"
			],
			damage: "20×"
		},
		{
			name: {
				ja: "いてつくせんこう"
			},
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Water",
				"Lightning",
				"Colorless",
				"Colorless"
			],
			damage: 100
		}
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		}
	],
	retreat: 2
}

export default card
