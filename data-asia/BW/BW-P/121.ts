import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "オノノクス"
	},
	variants: [{ type: "holo" }],
	rarity: "Promo",
	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 140,
	types: [
		"Dragon"
	],
	stage: "Stage2",
	dexId: [
		612
	],
	description: {
		ja: "鉄骨を 切りつけても 刃こぼれ しない 頑丈な キバを 持つ。 硬い よろいに おおわれている。"
	},
	attacks: [
		{
			name: {
				ja: "アーマープレス"
			},
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。"
			},
			cost: [
				"Metal",
				"Colorless"
			],
			damage: 40
		},
		{
			name: {
				ja: "ダブルチョップ"
			},
			effect: {
				ja: "コインを2回投げ、オモテの数×90ダメージ。"
			},
			cost: [
				"Fighting",
				"Metal",
				"Colorless"
			],
			damage: "90×"
		}
	],
	evolveFrom: {
		ja: "オノンド"
	},
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		}
	],
	retreat: 3
}

export default card
