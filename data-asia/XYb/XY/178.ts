import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "メガサメハダーEX"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: [
		"Darkness"
	],
	stage: "MEGA",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "トーピードダイブ"
			},
			effect: {
				ja: "相手のベンチポケモン全員にも、それぞれのにげるために必要なエネルギーの数×10ダメージ。［ベンチは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Darkness",
				"Darkness",
				"Colorless"
			],
			damage: 120
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 0,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
