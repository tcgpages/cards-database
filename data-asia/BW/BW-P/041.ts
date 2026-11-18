import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ダゲキ"
	},
	rarity: "Promo",
	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 90,
	types: [
		"Fighting"
	],
	stage: "Basic",
	dexId: [
		539
	],
	description: {
		ja: "帯を 締めると 気合いが 入り パンチの 破壊力が 増す。 修業を ジャマされると 怒る。"
	},
	attacks: [
		{
			name: {
				ja: "ごれんざん"
			},
			effect: {
				ja: "コインを5回投げ、オモテの数×20ダメージ。次の自分の番、このポケモンはワザを使えない。"
			},
			cost: [
				"Fighting",
				"Colorless"
			],
			damage: "20×"
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
