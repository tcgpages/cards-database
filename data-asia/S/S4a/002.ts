import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "投羽梟",
		ja: "フクスロー"
	},

	illustrator: "Mitsuhiro Arita",

	category: "Pokemon",

	hp: 80,

	types: [
		"Grass"
	],

	description: {
		'zh-tw': "連續投出被稱為是刃羽的刀般銳利羽毛，能精準地貫穿敵人要害。",
		ja: "刃羽根 と 呼ばれる ナイフのような 羽根を 立て続けに 投げて 敵の 急所を 確実に つらぬく。"
	},

	evolveFrom: {
		ja: "モクロー"
	},
	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "飛葉快刀",
				ja: "はっぱカッター"
			},
			damage: 40,
			cost: [
				"Grass"
			]
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

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		723
	]
}

export default card
