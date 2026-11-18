import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ネイティ"
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		177
	],
	hp: 50,
	types: [
		"Psychic"
	],
	stage: "Basic",
	description: {
		ja: "サボテンの つぼみや トゲを 器用に 避けながら ついばむ。 飛び跳ねるようにして 移動する。"
	},
	attacks: [
		{
			name: {
				ja: "つつく"
			},
			cost: [
				"Psychic",
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
