import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "バッフロン"
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		626
	],
	hp: 100,
	types: [
		"Colorless"
	],
	stage: "Basic",
	description: {
		ja: "激しい 頭突きを 食らわせても ふさふさの 体毛が ダメージを 吸収して くれるのだ。"
	},
	attacks: [
		{
			name: {
				ja: "リベンジ"
			},
			effect: {
				ja: "前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、70ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "20+"
		},
		{
			name: {
				ja: "アフロブレイク"
			},
			effect: {
				ja: "コインを1回投げウラなら、このポケモンにも20ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless",
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
	retreat: 2,
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
