import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "コロトック"
	},
	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: [
		"Grass"
	],
	stage: "Stage1",
	dexId: [
		402
	],
	description: {
		ja: "感情を メロディで 表す。 メロディの 法則性を 学者たちが 研究している。"
	},
	attacks: [
		{
			name: {
				ja: "いやなおと"
			},
			effect: {
				ja: "次の自分の番、このワザを受けたポケモンが受けるワザのダメージは「+60」される。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "きりさく"
			},
			cost: [
				"Grass"
			],
			damage: 40
		}
	],
	weaknesses: [
		{
			type: "Fire",
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
