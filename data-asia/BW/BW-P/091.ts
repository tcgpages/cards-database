import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ハハコモリ"
	},
	rarity: "Promo",
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 130,
	types: [
		"Grass"
	],
	stage: "Stage2",
	dexId: [
		542
	],
	description: {
		ja: "落ち葉が 発酵する 熱で タマゴを 温める。 クルミルに 葉っぱで おくるみを 作る。"
	},
	attacks: [
		{
			name: {
				ja: "きりさく"
			},
			cost: [
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "トリプルカッター"
			},
			effect: {
				ja: "コインを3回投げ、オモテの数×60ダメージ。"
			},
			cost: [
				"Grass",
				"Grass",
				"Colorless"
			],
			damage: "60×"
		}
	],
	evolveFrom: {
		ja: "クルマユ"
	},
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
