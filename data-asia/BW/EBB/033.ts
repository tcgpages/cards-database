import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ガマガル"
	},
	illustrator: "Sachiko Adachi",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		536
	],
	hp: 80,
	types: [
		"Water"
	],
	stage: "Stage1",
	description: {
		ja: "水中と 地上で 生活。 長く ネバネバした 舌で 獲物を 絡めて 捕らえる。"
	},
	attacks: [
		{
			name: {
				ja: "マッドショット"
			},
			cost: [
				"Water"
			],
			damage: 20
		},
		{
			name: {
				ja: "りんしょう"
			},
			effect: {
				ja: "ワザ「りんしょう」を持つ自分のポケモンの数×20ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "20×"
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 2,
	evolveFrom: {
		ja: "ガマゲロゲ"
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
