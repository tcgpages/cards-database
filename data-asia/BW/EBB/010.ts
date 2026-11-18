import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "リザード"
	},
	illustrator: "Akira Komayama",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		5
	],
	hp: 90,
	types: [
		"Fire"
	],
	stage: "Stage1",
	description: {
		ja: "リザードが 暮らす 岩山を 夜中に 見上げると しっぽの 炎が 星のように 見える。"
	},
	attacks: [
		{
			name: {
				ja: "ほのお"
			},
			cost: [
				"Fire"
			],
			damage: 20
		},
		{
			name: {
				ja: "いかりのツメ"
			},
			effect: {
				ja: "このポケモンにのっているダメカンの数×10ダメージを追加。"
			},
			cost: [
				"Fire",
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
	retreat: 2,
	evolveFrom: {
		ja: "リザードン"
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
