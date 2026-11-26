import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ランクルス"
	},
	rarity: "Promo",
	illustrator: "Mizue",
	category: "Pokemon",
	hp: 90,
	types: [
		"Psychic"
	],
	stage: "Stage2",
	dexId: [
		579
	],
	description: {
		ja: "岩を 握りつぶす 握力の 腕を 操り 戦う。 高い 知能を 持つ ポケモン。"
	},
	attacks: [
		{
			name: {
				ja: "ピヨピヨパンチ"
			},
			effect: {
				ja: "コインを2回投げ、オモテの数×30ダメージ。"
			},
			cost: [
				"Psychic"
			],
			damage: "30×"
		},
		{
			name: {
				ja: "サイコトリップ"
			},
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。"
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: 60
		}
	],
	evolveFrom: {
		ja: "ダブラン"
	},
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 2
}

export default card
