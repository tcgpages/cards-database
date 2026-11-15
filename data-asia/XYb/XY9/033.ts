import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "スリープ"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		96
	],
	description: {
		ja: "楽しい 夢を 見ていたはずなのに どんな夢か 思い出せないとき。 きっと スリープに 食べられたのだ。"
	},
	attacks: [
		{
			name: {
				ja: "つぶやく"
			},
			cost: [
				"Psychic"
			],
			damage: 10
		},
		{
			name: {
				ja: "ねんじる"
			},
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "10+"
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
