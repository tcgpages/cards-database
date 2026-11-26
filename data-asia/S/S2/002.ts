import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ヘラクロス"
	},
	rarity: "Common",
	illustrator: "otumami",
	category: "Pokemon",
	hp: 130,
	types: [
		"Grass"
	],
	stage: "Basic",
	dexId: [
		214
	],
	description: {
		ja: "甘いミツを 求め 森の 中を 探しまわる。 怪力は 自慢だが 飛ぶのは あまり 得意では ない。"
	},
	attacks: [
		{
			name: {
				ja: "つきとばす"
			},
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "かいりきホーン"
			},
			cost: [
				"Grass",
				"Grass",
				"Colorless"
			],
			damage: 110
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 2,
	regulationMark: "D",
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
