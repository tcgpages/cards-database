import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ミロカロスV"
	},
	rarity: "Double rare",
	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 210,
	types: [
		"Water"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				ja: "アクアインパクト"
			},
			effect: {
				ja: "相手のバトルポケモンのにげるためのエネルギーの数×50ダメージ追加。"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: "10+"
		},
		{
			name: {
				ja: "ヒプノスプラッシュ"
			},
			effect: {
				ja: "相手のバトルポケモンをねむりにする。"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 150
		}
	],
	suffix: "V",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "holo"
		}
	],
	dexId: [
		350
	]
}

export default card
