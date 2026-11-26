import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "フーパ"
	},
	illustrator: "Yoshinobu Saito",
	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		720
	],
	description: {
		ja: "６つの リングと ６つの 巨大な腕で あらゆるものを 奪うと いわれる。 力を 封じられ 小さな姿に 変えられた。"
	},
	attacks: [
		{
			name: {
				ja: "いじげんパンチ"
			},
			effect: {
				ja: "相手のポケモンを2匹選び、それぞれに20ダメージ。［ベンチは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "シンクホール"
			},
			effect: {
				ja: "次の自分の番、このポケモンは「シンクホール」が使えない。"
			},
			cost: [
				"Psychic",
				"Psychic",
				"Psychic"
			],
			damage: 130
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
			foil: "mirror"
		}
	]
}

export default card
