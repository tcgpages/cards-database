import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "キュレム"
	},
	illustrator: "Midori Harada",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		646
	],
	hp: 130,
	types: [
		"Water"
	],
	stage: "Basic",
	description: {
		ja: "強力な 冷凍エネルギーを 体内で 作り出すが 漏れ出した 冷気で 体が 凍っている。"
	},
	attacks: [
		{
			name: {
				ja: "げきりん"
			},
			effect: {
				ja: "このポケモンにのっているダメカンの数×10ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "20+"
		},
		{
			name: {
				ja: "こごえるせかい"
			},
			effect: {
				ja: "相手のポケモン全員に、それぞれ30ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Water",
				"Water",
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
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
