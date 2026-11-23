import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "長鼻葉",
		ja: "コノハナ"
	},

	illustrator: "otumami",

	category: "Pokemon",

	hp: 80,

	types: [
		"Grass"
	],

	description: {
		'zh-tw': "棲息在森林深處。會用頭上的葉子做成笛子，吹出令人感到不安的音色。",
		ja: "森の 奥深くに 生息。 頭の 葉っぱで 笛を 作り 不安に させる 音色を 出す。"
	},

	evolveFrom: {
		ja: "タネボー"
	},
	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "飛葉快刀",
				ja: "はっぱカッター"
			},
			damage: 40,
			cost: [
				"Grass"
			]
		}
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "Common",

	dexId: [
		274
	],

	variants: [
		{
			type: "normal",
			languages: [
				"ja"
			]
		}
	]
}

export default card
