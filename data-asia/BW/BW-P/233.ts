import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "シェイミ"
	},
	variants: [{ type: "holo" }],
	rarity: "Promo",
	illustrator: "match",
	category: "Pokemon",
	hp: 70,
	types: [
		"Grass"
	],
	stage: "Basic",
	dexId: [
		492
	],
	description: {
		ja: "人に 優しく 抱きしめられ ありがとうの 気持ちを 感じると 全身の 花が 開きだす。"
	},
	attacks: [
		{
			name: {
				ja: "エネアシスト"
			},
			effect: {
				ja: "自分のトラッシュから[草]エネルギーを1枚選び、ベンチポケモンにつける。"
			},
			cost: [
				"Grass"
			]
		},
		{
			name: {
				ja: "クイックターン"
			},
			effect: {
				ja: "コインを2回投げ、オモテの数×20ダメージ。"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: "20×"
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],
	retreat: 1
}

export default card
