import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "フィオネ"
	},
	illustrator: "kawayoo",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		489
	],
	hp: 70,
	types: [
		"Water"
	],
	stage: "Basic",
	description: {
		ja: "暖かい 海を 漂っている。 どんな 遠くに 流されても 生まれた 場所に かならず戻る。"
	},
	attacks: [
		{
			name: {
				ja: "ひろう"
			},
			effect: {
				ja: "自分のトラッシュから好きなカードを1枚選び、相手に見せてから、山札の上にもどす。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "アクアブーメラン"
			},
			effect: {
				ja: "このポケモンと、ついているすべてのカードを、手札にもどす。"
			},
			cost: [
				"Water"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 1,
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
