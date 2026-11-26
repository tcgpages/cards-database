import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ジャノビー"
	},
	illustrator: "Shigenori Negishi",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		496
	],
	hp: 80,
	types: [
		"Grass"
	],
	stage: "Stage1",
	description: {
		ja: "生い茂った 草木の 陰を 潜り抜けて 攻撃を 避ける。 巧みな ムチさばきで 反撃。"
	},
	attacks: [
		{
			name: {
				ja: "しぼりとる"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。さらに、そのポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Water",
			value: "－20"
		}
	],
	retreat: 1,
	evolveFrom: {
		ja: "ツタージャ"
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
