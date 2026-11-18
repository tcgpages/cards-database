import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ゾロアーク"
	},
	illustrator: "match",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		571
	],
	hp: 100,
	types: [
		"Darkness"
	],
	stage: "Stage1",
	description: {
		ja: "相手を 化かす ことで 群れの 安全を 守ってきた ポケモン。 仲間同士の 結束が 固い。"
	},
	attacks: [
		{
			name: {
				ja: "ビートダウン"
			},
			effect: {
				ja: "自分の場にいる悪ポケモンの数×20ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "20×"
		},
		{
			name: {
				ja: "ダークラッシュ"
			},
			effect: {
				ja: "このポケモンにのっているダメカンの数×20ダメージ。"
			},
			cost: [
				"Darkness",
				"Darkness"
			],
			damage: "20×"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "－20"
		}
	],
	retreat: 2,
	evolveFrom: {
		ja: "ゾロアークBREAK"
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
