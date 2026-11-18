import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ピッピ"
	},
	rarity: "Common",
	illustrator: "sowsow",
	category: "Pokemon",
	hp: 60,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		35
	],
	description: {
		ja: "満月の夜 ピッピが 集まって ダンスを 踊るようすを 見ると しあわせに なれると 言われている。"
	},
	attacks: [
		{
			name: {
				ja: "ひかるゆび"
			},
			effect: {
				ja: "相手のバトルポケモンをねむりにする。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "マジカルショット"
			},
			cost: [
				"Psychic"
			],
			damage: 10
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
