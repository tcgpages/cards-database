import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "オタマロ"
	},
	rarity: "Promo",
	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 50,
	types: [
		"Water"
	],
	stage: "Basic",
	dexId: [
		535
	],
	description: {
		ja: "ほほの 振動膜を 震わせ 人には きこえない 音波を だし 仲間たちに 危険を 伝える。"
	},
	attacks: [
		{
			name: {
				ja: "ちょうおんぱ"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをこんらんにする。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "きょうしん"
			},
			effect: {
				ja: "相手のバトルポケモンがこんらんなら、20ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "20+"
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
