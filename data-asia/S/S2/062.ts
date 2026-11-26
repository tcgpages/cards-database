import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "イシヘンジン"
	},
	rarity: "Rare",
	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 140,
	types: [
		"Fighting"
	],
	stage: "Basic",
	dexId: [
		874
	],
	description: {
		ja: "大草原の 中で たたずみ 陽の 傾きを 眺めて 暮らす。 ダイナミックな 蹴り技が 得意。"
	},
	attacks: [
		{
			name: {
				ja: "メガトンキック"
			},
			cost: [
				"Fighting",
				"Colorless",
				"Colorless"
			],
			damage: 80
		},
		{
			name: {
				ja: "パワープレス"
			},
			effect: {
				ja: "このワザを使うためのエネルギーより、1個多くエネルギーがついているなら、60ダメージ追加。"
			},
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "120+"
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 4,
	regulationMark: "D",
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
