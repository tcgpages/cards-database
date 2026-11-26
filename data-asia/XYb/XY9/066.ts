import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ラッタBREAK"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 110,
	types: [
		"Colorless"
	],
	dexId: [
		20
	],
	evolveFrom: {
		ja: "ラッタ"
	},
	stage: "BREAK",
	attacks: [
		{
			name: {
				ja: "いかりのまえば"
			},
			effect: {
				ja: "相手のバトルポケモンの残りHPが「10」になるように、ダメカンをのせる。"
			},
			cost: [
				"Colorless",
				"Colorless"
			]
		}
	],
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
