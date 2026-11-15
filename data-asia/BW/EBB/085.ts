import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ホワイトキュレムEX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		646
	],
	hp: 180,
	types: [
		"Dragon"
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "ドラゴンストリーム"
			},
			effect: {
				ja: "コインを1回投げオモテなら、自分のトラッシュから基本エネルギーを1枚選び、このポケモンにつける。"
			},
			cost: [
				"Fire",
				"Colorless",
				"Colorless"
			],
			damage: 60
		},
		{
			name: {
				ja: "コールドフレア"
			},
			effect: {
				ja: "このポケモンについている炎エネルギーを2個トラッシュし、相手のバトルポケモンをやけどにする。"
			},
			cost: [
				"Fire",
				"Fire",
				"Water",
				"Colorless"
			],
			damage: 150
		}
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		}
	],
	retreat: 3,
	variants: [
		{
			type: "holo",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "holo"
		}
	]
}

export default card
