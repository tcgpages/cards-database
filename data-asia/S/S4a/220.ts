import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル バリコオル"
	},
	illustrator: "Hideki Ishikawa",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 120,
	types: [
		"Water"
	],
	evolveFrom: {
		ja: "ガラル バリヤード"
	},
	stage: "Stage1",
	dexId: [
		866
	],
	description: {
		ja: "タップダンスの 達人。 氷で できた ステッキを 振り 軽やかな ステップを 披露する。"
	},
	abilities: [
		{
			name: {
				ja: "シャッフルダンス"
			},
			effect: {
				ja: "自分の番に1回使える。ウラになっている相手のサイドを1枚選び、相手の山札の一番上のカードと、ウラのまま入れ替える。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "マッドパーティ"
			},
			effect: {
				ja: "自分のトラッシュにある、ワザ「マッドパーティ」を持つポケモンの数×20ダメージ。"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: "20×"
		}
	],
	weaknesses: [
		{
			type: "Metal",
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
