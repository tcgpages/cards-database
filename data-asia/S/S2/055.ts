import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ナマズン"
	},
	rarity: "Uncommon",
	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 140,
	types: [
		"Fighting"
	],
	stage: "Stage1",
	dexId: [
		340
	],
	description: {
		ja: "沼の 底に すみかを つくる。 生き物なら 好き嫌いなく なんでも 食べてしまう 大食らい。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "もぐる"
			},
			effect: {
				ja: "このポケモンは、ベンチにいるかぎり、ワザのダメージを受けない。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "じしん"
			},
			effect: {
				ja: "自分のベンチポケモン全員にも、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
			},
			cost: [
				"Fighting",
				"Fighting"
			],
			damage: 140
		}
	],
	evolveFrom: {
		ja: "ドジョッチ"
	},
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 3,
	regulationMark: "D",
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
