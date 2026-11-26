import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "オノノクス"
	},
	rarity: "Promo",
	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 140,
	types: [
		"Colorless"
	],
	stage: "Stage2",
	dexId: [
		612
	],
	description: {
		ja: "鉄骨を 切りつけても 刃こぼれ しない 頑丈な キバを 持つ。 硬い よろいに おおわれている。"
	},
	attacks: [
		{
			name: {
				ja: "ハサミギロチン"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 60
		},
		{
			name: {
				ja: "アッパースイング"
			},
			effect: {
				ja: "コインを2回投げ、すべてオモテなら、相手のバトルポケモンをマヒにする。すべてウラなら、このワザは失敗。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 80
		}
	],
	evolveFrom: {
		ja: "オノンド"
	},
	retreat: 3
}

export default card
