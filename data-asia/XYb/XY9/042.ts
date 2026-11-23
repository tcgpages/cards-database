import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ニダンギル"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: [
		"Psychic"
	],
	evolveFrom: {
		ja: "ヒトツキ"
	},
	stage: "Stage1",
	dexId: [
		680
	],
	description: {
		ja: "２本の 剣による 複雑な 連続攻撃を 防ぐことは 剣の 達人でも 不可能だ。"
	},
	attacks: [
		{
			name: {
				ja: "ふかくささる"
			},
			effect: {
				ja: "相手のバトルポケモンにダメカンを3個のせる。"
			},
			cost: [
				"Psychic",
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
