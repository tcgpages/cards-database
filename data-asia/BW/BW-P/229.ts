import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ"
	},
	variants: [{ type: "holo" }],
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 60,
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
				ja: "たいでん"
			},
			effect: {
				ja: "自分のトラッシュから[雷]エネルギーを1枚選び、このポケモンにつける。"
			},
			cost: [
				"Lightning"
			]
		},
		{
			name: {
				ja: "10まんボルト"
			},
			effect: {
				ja: "このポケモンについているエネルギーをすべてトラッシュする。"
			},
			cost: [
				"Lightning",
				"Colorless",
				"Colorless"
			],
			damage: 80
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
