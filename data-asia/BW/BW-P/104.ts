import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "リオル"
	},
	rarity: "Promo",
	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: [
		"Fighting"
	],
	stage: "Basic",
	dexId: [
		447
	],
	description: {
		ja: "喜びや 怒りと いった 感情を 波の形 として 見分ける 不思議な力を 持つ。"
	},
	attacks: [
		{
			name: {
				ja: "はしゃぐ"
			},
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "ひっかける"
			},
			cost: [
				"Fighting",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
