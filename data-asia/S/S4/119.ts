import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル タチフサグマ"
	},
	illustrator: "aky CG Works",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 160,
	types: [
		"Darkness"
	],
	stage: "Stage2",
	dexId: [
		862
	],
	description: {
		ja: "ケンカを 繰り返し 進化。 腕をクロスし 叫ぶ 雄叫びは どんな 相手も 怯ませるぞ。"
	},
	abilities: [
		{
			name: {
				ja: "あらくれシャウト"
			},
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のポケモン1匹に、ダメカンを3個のせる。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ブロッキング"
			},
			effect: {
				ja: "次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。"
			},
			cost: [
				"Darkness",
				"Colorless"
			],
			damage: 90
		}
	],
	weaknesses: [
		{
			type: "Grass",
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
