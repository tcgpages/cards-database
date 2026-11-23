import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ピッピ"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: [
		"Fairy"
	],
	stage: "Basic",
	dexId: [
		35
	],
	description: {
		ja: "背中の 翼に 月の光を 集めることで 空中に 浮かぶことが できるらしい。"
	},
	attacks: [
		{
			name: {
				ja: "うたう"
			},
			effect: {
				ja: "相手のバトルポケモンをねむりにする。"
			},
			cost: [
				"Fairy"
			]
		},
		{
			name: {
				ja: "おうふくビンタ"
			},
			effect: {
				ja: "コインを2回投げ、オモテの数×10ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "10×"
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
