import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "キュウコン"
	},
	illustrator: "Satoshi Shirai",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		38
	],
	hp: 90,
	types: [
		"Fire"
	],
	stage: "Stage1",
	description: {
		ja: "９本の 長い しっぽ それぞれに 神通力が こめられており １０００年 生きることが できる。"
	},
	attacks: [
		{
			name: {
				ja: "いろげしょう"
			},
			effect: {
				ja: "相手のバトルポケモンのタイプと同じタイプの基本エネルギーが、このポケモンについているなら、40ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "50+"
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 1,
	evolveFrom: {
		ja: "キュウコンBREAK"
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
