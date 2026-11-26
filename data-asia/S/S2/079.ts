import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "マメパト"
	},
	rarity: "Common",
	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 60,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		519
	],
	description: {
		ja: "人の住む 場所に 現れる。 エサを まくと 何百匹でも 集まってくるので 注意だぞ。"
	},
	attacks: [
		{
			name: {
				ja: "とりぶえ"
			},
			effect: {
				ja: "自分の山札から、抵抗力が[闘]タイプのポケモンを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "するどいはね"
			},
			cost: [
				"Colorless",
				"Colorless"
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
	resistances: [
		{
			type: "Fighting",
			value: "－30"
		}
	],
	retreat: 1,
	regulationMark: "D",
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
