import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ドクロッグ"
	},
	illustrator: "Naoki Saito",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		454
	],
	hp: 90,
	types: [
		"Psychic"
	],
	stage: "Stage1",
	description: {
		ja: "ドクロッグが 戦いの 前に のどを 鳴らすのは 毒袋に ためこんだ 毒を 練りこむためだ。"
	},
	attacks: [
		{
			name: {
				ja: "リベンジ"
			},
			effect: {
				ja: "前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、70ダメージを追加。"
			},
			cost: [
				"Colorless"
			],
			damage: "20+"
		},
		{
			name: {
				ja: "どくづき"
			},
			effect: {
				ja: "相手のバトルポケモンをどくにする。"
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: 60
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 1,
	evolveFrom: {
		ja: "グレッグル"
	},
	variants: [
		{
			type: "normal",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "normal"
		},
		{
			type: "reverse",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "reverse"
		}
	]
}

export default card
