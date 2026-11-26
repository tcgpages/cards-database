import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "アゲハント",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Ken Sugimori",
	hp: 100,
	types: [
		"Grass",
	],
	stage: "Stage2",
	evolveFrom: {
		ja: "カラサリス",
	},
	dexId: [
		267,
	],
	attacks: [
		{
			name: {
				ja: "ちょっとすいとる",
			},
			effect: {
				ja: "自分のダメージカウンターを1個とりのぞく。",
			},
			cost: [
				"Grass",
				"Colorless",
			],
			damage: 30,
		},
		{
			name: {
				ja: "ふきとばし",
			},
			effect: {
				ja: "相手を相手のベンチポケモンと入れ替える。入れ替えるベンチポケモンは相手プレイヤーが選ぶ。",
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			damage: 40,
		},
	],
	weaknesses: [
		{
			type: "Fire",
		},
	],
	retreat: 0,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
