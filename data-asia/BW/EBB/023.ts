import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ギャラドス"
	},
	illustrator: "hatachu",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		130
	],
	hp: 130,
	types: [
		"Water"
	],
	stage: "Stage1",
	description: {
		ja: "一度 暴れだした ギャラドスは あらしが 吹きすさんでいようとも どんなものでも 焼きつくしてしまう。"
	},
	attacks: [
		{
			name: {
				ja: "たけりくるう"
			},
			effect: {
				ja: "おたがいのプレイヤーがすでにとったサイドの枚数×20ダメージ。"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: "20×"
		},
		{
			name: {
				ja: "ハイドロスプラッシュ"
			},
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 120
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 3,
	evolveFrom: {
		ja: "コイキング"
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
