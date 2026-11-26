import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "カジリガメ"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: [
		"Water"
	],
	evolveFrom: {
		ja: "カムカメ"
	},
	stage: "Stage1",
	dexId: [
		834
	],
	description: {
		ja: "首が 伸び縮みする。 離れた ところから 首を 一気に 伸ばし 鋭い キバで 敵を しとめる。"
	},
	attacks: [
		{
			name: {
				ja: "まんりきバイト"
			},
			effect: {
				ja: "相手のバトルポケモンのにげるためのエネルギーの数×30ダメージ追加。"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: "60+"
		},
		{
			name: {
				ja: "くらいつく"
			},
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 130
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 3,
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
