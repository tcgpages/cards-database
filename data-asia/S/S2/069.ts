import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "バルジーナ"
	},
	rarity: "Uncommon",
	illustrator: "kodama",
	category: "Pokemon",
	hp: 120,
	types: [
		"Darkness"
	],
	stage: "Stage1",
	dexId: [
		630
	],
	description: {
		ja: "荒っぽい 性質だが 迷子の バルチャイを 見かけると 巣立つまで 大切に 面倒を みる。"
	},
	attacks: [
		{
			name: {
				ja: "ボーンラッシュ"
			},
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数×30ダメージ。"
			},
			cost: [
				"Darkness"
			],
			damage: "30×"
		},
		{
			name: {
				ja: "やみうち"
			},
			effect: {
				ja: "ダメカンがのっている相手のポケモン1匹に、100ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
			},
			cost: [
				"Darkness",
				"Darkness"
			]
		}
	],
	evolveFrom: {
		ja: "バルジーナex"
	},
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "－30"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
