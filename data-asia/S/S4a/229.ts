import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ウッウ"
	},
	illustrator: "Akira Komayama",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 110,
	types: [
		"Water"
	],
	stage: "Basic",
	dexId: [
		845
	],
	description: {
		ja: "相手を 一撃で 打ち負かすほど パワフルだが 忘れっぽいので 戦っている 相手を 忘れる。"
	},
	attacks: [
		{
			name: {
				ja: "ダイビング"
			},
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。"
			},
			cost: [
				"Water"
			],
			damage: 20
		},
		{
			name: {
				ja: "ハイドロポンプ"
			},
			effect: {
				ja: "このポケモンについている水エネルギーの数×20ダメージ追加。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "50+"
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
