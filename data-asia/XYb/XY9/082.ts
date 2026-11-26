import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "メガギャラドスEX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 240,
	types: [
		"Water"
	],
	dexId: [
		130
	],
	evolveFrom: {
		ja: "ギャラドスEX"
	},
	stage: "MEGA",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "ブラストガイザー"
			},
			effect: {
				ja: "のぞむなら、このポケモンについている水エネルギーの数×20ダメージを追加してよい。その場合、自分の山札を上から2枚トラッシュする。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "120+"
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"]
		}
	]
}

export default card
