import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ"
	},
	rarity: "Promo",
	illustrator: "Kouki Saitou",
	cameoDexIds: [494, 495],
	category: "Pokemon",
	hp: 50,
	types: [
		"Lightning"
	],
	stage: "Basic",
	dexId: [
		25
	],
	description: {
		ja: "弱った 仲間の ピカチュウに 電気を流し ショックを与えて 元気を 分けることも ある。"
	},
	attacks: [
		{
			name: {
				ja: "こうそくいどう"
			},
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。"
			},
			cost: [
				"Lightning"
			],
			damage: 10
		},
		{
			name: {
				ja: "ちからをあつめる"
			},
			effect: {
				ja: "自分の山札から基本エネルギーを2枚選び、相手に見せてから、手札に加える。そして山札を切る。"
			},
			cost: [
				"Colorless",
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
