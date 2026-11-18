import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ドレディア"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: [
		"Grass"
	],
	stage: "Stage1",
	dexId: [
		549
	],
	description: {
		ja: "美しい 花を 咲かせるのは ベテラントレーナーでも 難しい。 セレブに 人気の ポケモン。"
	},
	attacks: [
		{
			name: {
				ja: "うるうる"
			},
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンに、相手が手札からエネルギーをつけたなら、そのポケモンをねむりにする。"
			},
			cost: [
				"Grass"
			],
			damage: 20
		},
		{
			name: {
				ja: "リーフスライス"
			},
			effect: {
				ja: "コインを2回投げ、オモテの数×30ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "30×"
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
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
