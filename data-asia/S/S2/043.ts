import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "シロデスナ"
	},
	rarity: "Uncommon",
	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 140,
	types: [
		"Psychic"
	],
	stage: "Stage1",
	dexId: [
		770
	],
	description: {
		ja: "砂嵐を 巻き起こし 相手の 身動きを 封じてから 生気を 奪う 恐ろしい ポケモンだ。"
	},
	attacks: [
		{
			name: {
				ja: "すなにしずめる"
			},
			effect: {
				ja: "相手の山札を上から1枚トラッシュする。このポケモンに「のろいのスコップ」がついているなら、さらに2枚トラッシュする。"
			},
			cost: [
				"Colorless",
				"Colorless"
			]
		},
		{
			name: {
				ja: "ちょうきゅうしゅう"
			},
			effect: {
				ja: "このポケモンのHPを「30」回復する。"
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: 90
		}
	],
	evolveFrom: {
		ja: "シロデスナGX"
	},
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "－30"
		}
	],
	retreat: 4,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
