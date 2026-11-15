import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ダイケンキ"
	},
	illustrator: "Naoki Saito",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		503
	],
	hp: 140,
	types: [
		"Water"
	],
	stage: "Stage2",
	description: {
		ja: "前脚の よろいの 一部が 大きな 剣に なっている。 ほえる だけで 敵を 威圧する。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "シェルアーマー"
			},
			effect: {
				ja: "このポケモンが受けるワザのダメージは「-20」される。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "ハイドロポンプ"
			},
			effect: {
				ja: "このポケモンについている水エネルギーの数×10ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "70+"
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 2,
	evolveFrom: {
		ja: "ヒスイ ダイケンキ"
	},
	variants: [
		{
			type: "normal",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "normal"
		},
		{
			type: "reverse",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "reverse"
		}
	]
}

export default card
