import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ジャローダ"
	},
	rarity: "Promo",
	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 130,
	types: [
		"Grass"
	],
	stage: "Stage2",
	dexId: [
		497
	],
	description: {
		ja: "ジャローダの 気高い ひとみで 射すくめられても 平気な 強い 相手にだけ 本気を だす。"
	},
	attacks: [
		{
			name: {
				ja: "いあいぎり"
			},
			cost: [
				"Colorless"
			],
			damage: 40
		},
		{
			name: {
				ja: "クロスウィップ"
			},
			effect: {
				ja: "コインを4回投げ、オモテの数×50ダメージ。"
			},
			cost: [
				"Grass",
				"Grass",
				"Colorless"
			],
			damage: "50×"
		}
	],
	evolveFrom: {
		ja: "ジャローダex"
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
