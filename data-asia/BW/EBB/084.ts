import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ブラックキュレムEX"
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
				ja: "りゅうのキバ"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Lightning",
				"Colorless",
				"Colorless"
			],
			damage: 60
		},
		{
			name: {
				ja: "フリーズボルト"
			},
			effect: {
				ja: "次の自分の番、このポケモンはワザを使えない。"
			},
			cost: [
				"Water",
				"Lightning",
				"Lightning",
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
