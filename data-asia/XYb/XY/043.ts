import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "メガミュウツーEX"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: [
		"Psychic"
	],
	dexId: [
		150
	],
	evolveFrom: {
		ja: "ミュウツーEX"
	},
	stage: "MEGA",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "サイキックインフィニティ"
			},
			effect: {
				ja: "おたがいのバトルポケモンについているエネルギーの数×30ダメージを追加。このワザのダメージは弱点の計算をしない。"
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
			type: "holo"
		}
	]
}

export default card
