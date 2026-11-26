import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ジュプトル",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Mitsuhiro Arita",
	hp: 70,
	types: [
		"Grass",
	],
	stage: "Stage1",
	evolveFrom: {
		ja: "キモリ",
	},
	dexId: [
		253,
	],
	attacks: [
		{
			name: {
				ja: "でんこうせっか",
			},
			effect: {
				ja: "コインを1回投げオモテなら、10ダメージを追加。",
			},
			cost: [
				"Colorless",
			],
			damage: "10+",
		},
		{
			name: {
				ja: "ちょっとすいとる",
			},
			effect: {
				ja: "自分のダメージカウンターを2個とりのぞく。",
			},
			cost: [
				"Grass",
				"Colorless",
			],
			damage: 20,
		},
	],
	weaknesses: [
		{
			type: "Fire",
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30",
		},
	],
	retreat: 1,
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
