import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ヤドキング"
	},
	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: [
		"Water"
	],
	stage: "Stage1",
	dexId: [
		199
	],
	description: {
		ja: "かまれたとき 頭に 染みこんだ 毒素に よって ただならない 能力に 目覚めた ヤドン。"
	},
	abilities: [
		{
			name: {
				ja: "おうじゃのひらめき"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。この特性は、自分の番に1回使える。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "じこあんじ"
			},
			effect: {
				ja: "次の自分の番、このポケモンが使う「じこあんじ」のダメージは「+40」される。"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: 40
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
