import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ラティオスδ-デルタ種",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Masakazu Fukuda",
	hp: 80,
	types: [
		"Water",
	],
	stage: "Basic",
	dexId: [
		381,
	],
	attacks: [
		{
			name: {
				ja: "アクアウェーブ",
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
				ja: "りゅうのいぶき",
			},
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。オモテなら、相手をマヒにする。",
			},
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			damage: 50,
		},
	],
	weaknesses: [
		{
			type: "Colorless",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	variants: [
		{
			type: "normal",
			stamp: [
				"mcdonalds",
			],
		},
	],
}

export default card
