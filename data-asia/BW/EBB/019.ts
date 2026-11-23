import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "エンブオー"
	},
	illustrator: "Kanako Eo",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		500
	],
	hp: 150,
	types: [
		"Fire"
	],
	stage: "Stage2",
	description: {
		ja: "アゴの 炎で こぶしを 燃やして 炎の パンチを 繰り出す。 とても 仲間思いの ポケモン。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "れっからんぶ"
			},
			effect: {
				ja: "自分の手札から炎エネルギーを1枚選び、自分のポケモンにつける。この特性は、自分の番に何回でも使える。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "ヒートスタンプ"
			},
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless"
			],
			damage: 80
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 4,
	evolveFrom: {
		ja: "チャオブー"
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
