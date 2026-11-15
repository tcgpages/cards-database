import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ダブラン"
	},
	illustrator: "Suwama Chiaki",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		578
	],
	hp: 60,
	types: [
		"Psychic"
	],
	stage: "Stage1",
	description: {
		ja: "２つに 分裂した 脳みそを 持っているため いきなり 違う 行動を とることが あるのだ。"
	},
	attacks: [
		{
			name: {
				ja: "ころがる"
			},
			cost: [
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 1,
	evolveFrom: {
		ja: "ランクルス"
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
