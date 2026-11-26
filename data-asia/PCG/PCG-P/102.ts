import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ブースター",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Masakazu Fukuda",
	hp: 70,
	types: [
		"Fire",
	],
	stage: "Stage1",
	evolveFrom: {
		ja: "イーブイ",
	},
	dexId: [
		136,
	],
	attacks: [
		{
			name: {
				ja: "でんこうせっか",
			},
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージを追加。",
			},
			cost: [
				"Colorless",
				"Colorless",
			],
			damage: "10+",
		},
		{
			name: {
				ja: "ほのおのうず",
			},
			effect: {
				ja: "自分の基本エネルギーを2個トラッシュする。（トラッシュできないなら、このワザは失敗する。）",
			},
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			damage: 70,
		},
	],
	weaknesses: [
		{
			type: "Water",
		},
	],
	retreat: 1,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
