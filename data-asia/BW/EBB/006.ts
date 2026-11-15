import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "クルマユ"
	},
	illustrator: "sui",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		541
	],
	hp: 70,
	types: [
		"Grass"
	],
	stage: "Stage1",
	description: {
		ja: "クルマユの 住む 森は 草木が よく 育つ。 クルマユが 落ち葉を 栄養分に 変えているのだ。"
	},
	attacks: [
		{
			name: {
				ja: "たいあたり"
			},
			cost: [
				"Grass"
			],
			damage: 20
		},
		{
			name: {
				ja: "いとをはく"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 1,
	evolveFrom: {
		ja: "ハハコモリ"
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
