import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "チラーミィ"
	},
	illustrator: "MAHOU",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		572
	],
	description: {
		ja: "しっぽで 汚れを 払い落す。 掃除を するときに 助かるが 潔癖症 なので 大変。"
	},
	attacks: [
		{
			name: {
				ja: "ちらみ"
			},
			effect: {
				ja: "相手の山札を上から1枚見て、もとにもどす。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "スイープビンタ"
			},
			effect: {
				ja: "コインを2回投げ、オモテの数×20ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "20×"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "D",
	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
