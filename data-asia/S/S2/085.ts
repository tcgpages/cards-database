import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ヨクバリス"
	},
	rarity: "Uncommon",
	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 120,
	types: [
		"Colorless"
	],
	stage: "Stage1",
	dexId: [
		820
	],
	description: {
		ja: "しっぽに 木の実を 溜めこむ。 溜めこみすぎて ポロポロ こぼすが 鈍いので 気がつかない。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "がめついしっぽ"
			},
			effect: {
				ja: "自分の番に1回使える。自分の山札から「ポケモンのどうぐ」を1枚選び、相手に見せて、手札に加える。そして山札を切る。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "しっぽでたたく"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 80
		}
	],
	evolveFrom: {
		ja: "ヨクバリスex"
	},
	weaknesses: [
		{
			type: "Fighting",
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
