import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ポッチャマ"
	},
	illustrator: "Mizue",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		393
	],
	hp: 60,
	types: [
		"Water"
	],
	stage: "Basic",
	description: {
		ja: "歩くのは 苦手で こけたりするが ポッチャマの プライドは 高く 気にせず 堂々と 胸を はる。"
	},
	attacks: [
		{
			name: {
				ja: "みずしぶき"
			},
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージを追加。"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: "10+"
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 1,
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
