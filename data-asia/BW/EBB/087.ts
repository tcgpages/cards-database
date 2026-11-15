import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "チルット"
	},
	illustrator: "Akira Komayama",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		333
	],
	hp: 40,
	types: [
		"Colorless"
	],
	stage: "Basic",
	description: {
		ja: "人の 頭の 上に ちょこんと 乗って 帽子のように ふるまうのが なぜか 大好き。"
	},
	attacks: [
		{
			name: {
				ja: "にらんでつつく"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 10
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "－20"
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
