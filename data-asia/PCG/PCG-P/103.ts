import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "レックウザδ-デルタ種",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Ryo Ueda",
	hp: 80,
	types: [
		"Fire",
	],
	stage: "Basic",
	dexId: [
		384,
	],
	attacks: [
		{
			name: {
				ja: "げきりん",
			},
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗する。オモテなら、自分のダメージカウンター×10ダメージを追加する。",
			},
			cost: [
				"Fire",
				"Colorless",
			],
			damage: "10+",
		},
		{
			name: {
				ja: "かえんほうしゃ",
			},
			effect: {
				ja: "自分の{R}エネルギーを1個トラッシュする。",
			},
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			damage: 40,
		},
	],
	weaknesses: [
		{
			type: "Colorless",
		},
	],
	retreat: 2,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
