import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "コイキング"
	},
	illustrator: "Midori Harada",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		129
	],
	hp: 30,
	types: [
		"Water"
	],
	stage: "Basic",
	description: {
		ja: "長年 生きた コイキングは 跳ねるだけで 山をも 越えるが 技の威力は 弱いまま。"
	},
	attacks: [
		{
			name: {
				ja: "ぴっちぴち"
			},
			effect: {
				ja: "コインを1回投げウラなら、このポケモンにも10ダメージ。"
			},
			cost: [
				"Colorless"
			],
			damage: 10
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
