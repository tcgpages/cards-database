import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ギルガルド"
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: [
		"Psychic"
	],
	stage: "Stage2",
	dexId: [
		681
	],
	description: {
		ja: "王の 素質を 持つ 人間を 見抜くらしい。 認められた 人は やがて 王になると 言われている。"
	},
	attacks: [
		{
			name: {
				ja: "ソードペイン"
			},
			effect: {
				ja: "相手のポケモン全員に、それぞれのっているダメカンの数が2倍になるように、ダメカンをのせる。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			]
		},
		{
			name: {
				ja: "メガトンスラッシュ"
			},
			effect: {
				ja: "相手のベンチポケモンを2匹選び、そのポケモンにも、それぞれ10ダメージ。［ベンチは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: 100
		}
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],
	retreat: 3,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
