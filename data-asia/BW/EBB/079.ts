import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ガバイト"
	},
	illustrator: "Shigenori Negishi",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		444
	],
	hp: 80,
	types: [
		"Dragon"
	],
	stage: "Stage1",
	description: {
		ja: "光り輝く ものが 大好きで 洞くつの 中で 見つけた 宝を 自分の巣に ため込む。"
	},
	attacks: [
		{
			name: {
				ja: "たいあたり"
			},
			cost: [
				"Colorless"
			],
			damage: 20
		},
		{
			name: {
				ja: "ひきさく"
			},
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果の計算をしない。"
			},
			cost: [
				"Water",
				"Fighting"
			],
			damage: 40
		}
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		}
	],
	retreat: 1,
	evolveFrom: {
		ja: "フカマル"
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
