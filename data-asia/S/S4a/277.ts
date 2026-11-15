import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ジグザグマ"
	},
	illustrator: "Misa Tsutsui",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: [
		"Darkness"
	],
	stage: "Basic",
	dexId: [
		263
	],
	description: {
		ja: "この姿が いちばん 古い ジグザグマの 姿 らしい。 ジグザグ動いて あたりを 荒らす。"
	},
	abilities: [
		{
			name: {
				ja: "かんしゃくヘッド"
			},
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。相手のポケモン1匹に、ダメカンを1個のせる。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ふいをつく"
			},
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。"
			},
			cost: [
				"Darkness",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Grass",
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
