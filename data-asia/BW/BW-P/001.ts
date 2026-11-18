import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ヤナップ"
	},
	rarity: "Promo",
	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 60,
	types: [
		"Grass"
	],
	stage: "Basic",
	dexId: [
		511
	],
	description: {
		ja: "元気の ない ポケモンに 頭の 葉っぱを 分け与える。 疲れを 取る 効果が あるのだ。"
	},
	attacks: [
		{
			name: {
				ja: "タネマシンガン"
			},
			effect: {
				ja: "コインを4回投げ、オモテの数×10ダメージ。"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: "10×"
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
