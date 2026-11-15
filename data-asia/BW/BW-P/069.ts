import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "チラチーノ"
	},
	rarity: "Promo",
	illustrator: "Mizue",
	category: "Pokemon",
	hp: 90,
	types: [
		"Colorless"
	],
	stage: "Stage1",
	dexId: [
		573
	],
	description: {
		ja: "白い 体毛は 肌触りが 抜群。 ほこりや 静電気を まったく 寄せつけないのだ。"
	},
	attacks: [
		{
			name: {
				ja: "ゆうわく"
			},
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "ふわふわテール"
			},
			effect: {
				ja: "相手のバトルポケモンをねむりにする。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 30
		}
	],
	evolveFrom: {
		ja: "チラチーノex"
	},
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
