import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "マルヤクデVMAX"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: [
		"Fire"
	],
	dexId: [
		851
	],
	evolveFrom: {
		ja: "マルヤクデV"
	},
	stage: "VMAX",
	attacks: [
		{
			name: {
				ja: "キョダイヒャッカ"
			},
			effect: {
				ja: "このポケモンについている炎エネルギーの数×40ダメージ追加。のぞむなら、ダメージを与えたあとに、自分のトラッシュから炎エネルギーを1枚選び、このポケモンにつける。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "40+"
		}
	],
	weaknesses: [
		{
			type: "Water",
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
