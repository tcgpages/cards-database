import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "チャオブー"
	},
	illustrator: "Kanako Eo",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		499
	],
	hp: 100,
	types: [
		"Fire"
	],
	stage: "Stage1",
	description: {
		ja: "体内の 炎が 燃え上がると 動きの キレと スピードが 増す。 ピンチになると 煙を 吹き出す。"
	},
	attacks: [
		{
			name: {
				ja: "ころがる"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 20
		},
		{
			name: {
				ja: "かえんほうしゃ"
			},
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Fire",
				"Fire",
				"Colorless"
			],
			damage: 70
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 3,
	evolveFrom: {
		ja: "ポカブ"
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
