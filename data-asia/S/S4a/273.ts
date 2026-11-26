import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "タイレーツ"
	},
	illustrator: "Kouki Saitou",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: [
		"Fighting"
	],
	stage: "Basic",
	dexId: [
		870
	],
	description: {
		ja: "ヘイチョーと 呼ばれる １匹と ヘイと 呼ばれる ５匹で ひとつ。 ヘイチョーの 命令は 絶対。"
	},
	attacks: [
		{
			name: {
				ja: "なかまをよぶ"
			},
			effect: {
				ja: "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "チームアタック"
			},
			effect: {
				ja: "自分のベンチの、名前に「タイレーツ」とつくポケモンの数×30ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "30×"
		}
	],
	weaknesses: [
		{
			type: "Psychic",
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
