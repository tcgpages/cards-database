import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ハスブレロ"
	},
	rarity: "Common",
	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 90,
	types: [
		"Grass"
	],
	stage: "Stage1",
	dexId: [
		271
	],
	description: {
		ja: "夕暮れどきに なると 活動を はじめる 夜行性の ポケモン。 川底の 水苔を 食べる。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "トップエントリー"
			},
			effect: {
				ja: "自分の番のはじめに、山札からこのカードを引いたとき、自分のベンチに空きがあるなら、手札に加える前に1回使える。このカードを自分のベンチに出す。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "みだれひっかき"
			},
			effect: {
				ja: "コインを3回投げオモテの数×40ダメージ。"
			},
			cost: [
				"Grass",
				"Colorless",
				"Colorless"
			],
			damage: "40×"
		}
	],
	evolveFrom: {
		ja: "ハスボー"
	},
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "D",
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
