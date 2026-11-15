import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ドレディア"
	},
	rarity: "Promo",
	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 90,
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
				ja: "みちびく"
			},
			effect: {
				ja: "自分の山札から「サポート」を1枚選び、相手に見せてから、手札に加える。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "ゆめみのまい"
			},
			effect: {
				ja: "このポケモンと相手のバトルポケモンをねむりにする。"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: 30
		}
	],
	evolveFrom: {
		ja: "ヒスイ ドレディア"
	},
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		}
	],
	retreat: 1
}

export default card
