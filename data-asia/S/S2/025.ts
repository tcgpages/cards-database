import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ガマゲロゲ"
	},
	rarity: "Uncommon",
	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 170,
	types: [
		"Water"
	],
	stage: "Stage2",
	dexId: [
		537
	],
	description: {
		ja: "全身の コブを 震わせて 地震のような 揺れを 起こす。 グレッグルと 近い 種類。"
	},
	attacks: [
		{
			name: {
				ja: "ぐるぐるパンチ"
			},
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。"
			},
			cost: [
				"Water"
			],
			damage: 30
		},
		{
			name: {
				ja: "きょうしん"
			},
			effect: {
				ja: "相手のバトルポケモンがこんらんなら、120ダメージ追加。"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "120+"
		}
	],
	evolveFrom: {
		ja: "ガマガル"
	},
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 3,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
