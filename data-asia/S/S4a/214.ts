import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ヒバニー"
	},
	illustrator: "MAHOU",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: [
		"Fire"
	],
	stage: "Basic",
	dexId: [
		813
	],
	description: {
		ja: "戦う 準備が 整うと 鼻の 頭と 足の 裏の 肉球が 高熱を 発する。"
	},
	attacks: [
		{
			name: {
				ja: "ひのこ"
			},
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Fire"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Water",
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
