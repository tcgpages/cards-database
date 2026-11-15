import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ヒヒダルマVMAX"
	},
	illustrator: "5ban Graphics",
	rarity: "Hyper rare",
	category: "Pokemon",
	hp: 320,
	types: [
		"Water"
	],
	stage: "VMAX",
	suffix: "VMAX",
	attacks: [
		{
			name: {
				ja: "ダイゴウセツ"
			},
			effect: {
				ja: "相手のベンチポケモン全員にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
			},
			cost: [
				"Water",
				"Water",
				"Water",
				"Water"
			],
			damage: 200
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	retreat: 3,
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
