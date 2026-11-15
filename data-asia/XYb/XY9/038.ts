import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "シンボラー"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		561
	],
	description: {
		ja: "古代都市の 守り神。 いつも 同じルートを 巡回し 侵入者を 見張っていた。"
	},
	attacks: [
		{
			name: {
				ja: "はんしゃシールド"
			},
			effect: {
				ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを5個のせる。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "サイコリポート"
			},
			effect: {
				ja: "相手の手札を見る。"
			},
			cost: [
				"Psychic",
				"Psychic"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
