import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "エンテイ"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: [
		"Fire"
	],
	dexId: [
		244
	],
	stage: "Basic",
	abilities: [
		{
			name: {
				ja: "Θ（シータ）ダブル"
			},
			effect: {
				ja: "このポケモンは、「ポケモンのどうぐ」を2枚までつけられる。"
			},
			type: "Ancient Trait"
		}
	],
	attacks: [
		{
			name: {
				ja: "フレイムバリア"
			},
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。"
			},
			cost: [
				"Fire",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "ヒートタックル"
			},
			effect: {
				ja: "コインを1回投げウラなら、このポケモンにも30ダメージ。"
			},
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless"
			],
			damage: 130
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
			foil: "mirror"
		}
	]
}

export default card
