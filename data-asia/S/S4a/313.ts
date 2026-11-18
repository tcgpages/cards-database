import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "パルスワンV"
	},
	illustrator: "aky CG Works",
	rarity: "Shiny rare V",
	category: "Pokemon",
	hp: 200,
	types: [
		"Lightning"
	],
	stage: "Basic",
	suffix: "V",
	attacks: [
		{
			name: {
				ja: "そうでん"
			},
			effect: {
				ja: "自分の山札から雷エネルギーを2枚まで選び、ベンチポケモンに好きなようにつける。そして山札を切る。"
			},
			cost: [
				"Lightning"
			]
		},
		{
			name: {
				ja: "ライトニングストーム"
			},
			effect: {
				ja: "自分の場のポケモンについている雷エネルギーの数×30ダメージ追加。"
			},
			cost: [
				"Lightning",
				"Colorless"
			],
			damage: "10+"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 2,
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
