import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,
	name: {
		ja: "イオルブV"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 180,
	types: [
		"Grass"
	],
	dexId: [
		826
	],
	stage: "Basic",
	suffix: "V",
	attacks: [
		{
			name: {
				ja: "ひるがえす"
			},
			effect: {
				ja: "のぞむなら、このポケモンをベンチポケモンと入れ替える。"
			},
			cost: [
				"Grass"
			],
			damage: 20
		},
		{
			name: {
				ja: "ミステリーウェーブ"
			},
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: "50+"
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
