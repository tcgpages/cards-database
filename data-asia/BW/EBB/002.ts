import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ツタージャ"
	},
	illustrator: "Aya Kusube",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		495
	],
	hp: 60,
	types: [
		"Grass"
	],
	stage: "Basic",
	description: {
		ja: "しっぽで 太陽の光を 浴びて 光合成を する。 元気を なくすと しっぽが たれさがる。"
	},
	attacks: [
		{
			name: {
				ja: "リーフブレード"
			},
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージを追加。"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: "10+"
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Water",
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
