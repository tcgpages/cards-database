import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "テッポウオ"
	},
	illustrator: "Suwama Chiaki",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Water"
	],
	stage: "Basic",
	dexId: [
		223
	],
	description: {
		ja: "吸盤の ように 変化した 背びれで マンタインに くっつき 食べ残しを 分けてもらっている。"
	},
	attacks: [
		{
			name: {
				ja: "ワイルドリバー"
			},
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "みずでっぽう"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
			foil: "mirror"
		}
	]
}

export default card
