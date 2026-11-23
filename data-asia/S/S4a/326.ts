import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ウッウV"
	},
	illustrator: "aky CG Works",
	rarity: "Shiny rare V",
	category: "Pokemon",
	hp: 200,
	types: [
		"Colorless"
	],
	dexId: [
		845
	],
	stage: "Basic",
	suffix: "V",
	attacks: [
		{
			name: {
				ja: "くちばしキャッチ"
			},
			effect: {
				ja: "自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "スピットシュート"
			},
			effect: {
				ja: "このポケモンについているエネルギーをすべてトラッシュし、相手のポケモン1匹に、160ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
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
