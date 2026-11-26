import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークライEX"
	},
	illustrator: "Shizurow",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		491
	],
	hp: 180,
	types: [
		"Darkness"
	],
	stage: "Basic",
	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "やみのころも"
			},
			effect: {
				ja: "このポケモンがいるかぎり、悪エネルギーがついている自分のポケモン全員のにげるために必要なエネルギーは、すべてなくなる。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "ナイトスピア"
			},
			effect: {
				ja: "相手のベンチポケモンを1匹選び、そのポケモンにも30ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Darkness",
				"Darkness",
				"Colorless"
			],
			damage: 90
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
	variants: [
		{
			type: "holo",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "holo"
		}
	]
}

export default card
