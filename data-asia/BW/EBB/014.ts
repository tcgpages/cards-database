import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ファイヤー"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		146
	],
	hp: 120,
	types: [
		"Fire"
	],
	stage: "Basic",
	description: {
		ja: "伝説の とりポケモンの １匹。 ファイヤーが 姿を 見せると 春が 訪れると 言われている。"
	},
	attacks: [
		{
			name: {
				ja: "やきこがす"
			},
			effect: {
				ja: "相手のバトルポケモンをやけどにする。"
			},
			cost: [
				"Fire",
				"Colorless",
				"Colorless"
			],
			damage: 50
		},
		{
			name: {
				ja: "だいもんじ"
			},
			effect: {
				ja: "このポケモンについている炎エネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 90
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "－20"
		}
	],
	retreat: 2,
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
