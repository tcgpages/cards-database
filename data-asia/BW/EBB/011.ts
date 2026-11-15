import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "リザードン"
	},
	illustrator: "TOKIYA",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		6
	],
	hp: 160,
	types: [
		"Fire"
	],
	stage: "Stage2",
	description: {
		ja: "苦しい 戦いを 経験した リザードンほど 炎の 温度が 高くなると 言われている。"
	},
	attacks: [
		{
			name: {
				ja: "ばくれつだん"
			},
			effect: {
				ja: "相手のポケモンを2匹選び、それぞれに40ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Fire",
				"Colorless",
				"Colorless"
			]
		},
		{
			name: {
				ja: "バーンアウト"
			},
			effect: {
				ja: "このポケモンについている炎エネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 150
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 3,
	evolveFrom: {
		ja: "リザードンGX"
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
