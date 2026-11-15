import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ツタージャ"
	},
	rarity: "Promo",
	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 60,
	types: [
		"Grass"
	],
	stage: "Basic",
	dexId: [
		495
	],
	description: {
		ja: "知能が 高く とても 冷静。 太陽の 光を たっぷり 浴びると 動きが 鋭くなる。"
	},
	attacks: [
		{
			name: {
				ja: "たたきつける"
			},
			effect: {
				ja: "コインを2回投げ、オモテの数×20ダメージ。"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: "20×"
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		}
	],
	retreat: 1
}

export default card
