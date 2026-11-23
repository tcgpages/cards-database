import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ビークイン"
	},
	illustrator: "kawayoo",
	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: [
		"Grass"
	],
	evolveFrom: {
		ja: "ミツハニー"
	},
	stage: "Stage1",
	dexId: [
		416
	],
	description: {
		ja: "胴体が 子供たちの 巣穴に なっている。 ミツハニーの 集めた ミツで 子供たちを 育てる。"
	},
	attacks: [
		{
			name: {
				ja: "じょうほうしゅうしゅう"
			},
			effect: {
				ja: "のぞむなら、自分の手札が6枚になるように、山札を引いてよい。"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		},
		{
			name: {
				ja: "ビーリベンジ"
			},
			effect: {
				ja: "自分のトラッシュにあるポケモンの枚数×10ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "20+"
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 0,
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
