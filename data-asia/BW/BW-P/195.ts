import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ボーマンダ"
	},
	rarity: "Promo",
	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 150,
	types: [
		"Dragon"
	],
	stage: "Stage2",
	dexId: [
		373
	],
	description: {
		ja: "空を 飛ぶことを 願い続けた 結果 体の 細胞が 変化して 翼が 生えてきた。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ブレイクウイング"
			},
			effect: {
				ja: "この特性は、このカードを手札から出して進化させたとき、1回使える。相手のポケモン全員についている「ポケモンのどうぐ」をすべてトラッシュする。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "ガイアクラッシュ"
			},
			effect: {
				ja: "場に出ている「スタジアム」をトラッシュする。"
			},
			cost: [
				"Fire",
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: 100
		}
	],
	evolveFrom: {
		ja: "ボーマンダex"
	},
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		}
	],
	retreat: 4
}

export default card
