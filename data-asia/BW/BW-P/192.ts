import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ランドロス"
	},
	variants: [{ type: "reverse" }],
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 110,
	types: [
		"Fighting"
	],
	stage: "Basic",
	dexId: [
		645
	],
	description: {
		ja: "風や 雷を 取りこみ 変えた エネルギーが 土に 栄養を 与えて 大地を 豊かに する。"
	},
	attacks: [
		{
			name: {
				ja: "じんつうりき"
			},
			effect: {
				ja: "自分の手札と相手の手札が同じ枚数なら、30ダメージを追加。"
			},
			cost: [
				"Fighting",
				"Colorless"
			],
			damage: "20+"
		},
		{
			name: {
				ja: "がんせきふうじ"
			},
			effect: {
				ja: "次の相手の番、このワザを受けた相手のバトルポケモンは、にげられない。"
			},
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless"
			],
			damage: 90
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		}
	],
	retreat: 2
}

export default card
