import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ムゲンダイナVMAX"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 340,
	types: [
		"Darkness"
	],
	stage: "VMAX",
	suffix: "VMAX",
	abilities: [
		{
			name: {
				ja: "ムゲンゾーン"
			},
			effect: {
				ja: "自分の場のポケモン全員が悪タイプならはたらく。自分のベンチに出せる悪ポケモンの数は8匹になり、別のタイプは場に出せない。（この特性がはたらかなくなったとき、ベンチが5匹になるまでトラッシュする。）"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ドレッドエンド"
			},
			effect: {
				ja: "自分の場の悪ポケモンの数×30ダメージ。"
			},
			cost: [
				"Darkness",
				"Colorless"
			],
			damage: "30×"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
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
