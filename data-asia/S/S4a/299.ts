import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ヨクバリス"
	},
	illustrator: "Hideki Ishikawa",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 120,
	types: [
		"Colorless"
	],
	evolveFrom: {
		ja: "ホシガリス"
	},
	stage: "Stage1",
	dexId: [
		820
	],
	description: {
		ja: "しっぽに 木の実を 溜めこむ。 溜めこみすぎて ポロポロ こぼすが 鈍いので 気がつかない。"
	},
	abilities: [
		{
			name: {
				ja: "がめついしっぽ"
			},
			effect: {
				ja: "自分の番に1回使える。自分の山札から「ポケモンのどうぐ」を1枚選び、相手に見せて、手札に加える。そして山札を切る。"
			},
			type: "Ability"
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
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "D",
	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
