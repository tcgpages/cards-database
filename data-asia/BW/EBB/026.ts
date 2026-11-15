import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ポッタイシ"
	},
	illustrator: "Miki Tanaka",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		394
	],
	hp: 90,
	types: [
		"Water"
	],
	stage: "Stage1",
	description: {
		ja: "どの ポッタイシも 自分が 一番 偉いと 考えるため 群れを 作ることは 不可能だ。"
	},
	attacks: [
		{
			name: {
				ja: "みずしぶき"
			},
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージを追加。"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: "20+"
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 2,
	evolveFrom: {
		ja: "エンペルトBREAK"
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
