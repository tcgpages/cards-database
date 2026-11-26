import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "レックウザEX"
	},
	variants: [{ type: "holo" }],
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 170,
	types: [
		"Dragon"
	],
	stage: "Basic",
	dexId: [
		384
	],
	attacks: [
		{
			name: {
				ja: "てんのさけび"
			},
			effect: {
				ja: "自分の山札を上から3枚トラッシュし、その中のエネルギーをすべて、このポケモンにつける。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "ドラゴンバースト"
			},
			effect: {
				ja: "このポケモンについている[炎]または[雷]の基本エネルギーをすべてトラッシュし、トラッシュしたエネルギーの枚数×60ダメージ。"
			},
			cost: [
				"Fire",
				"Lightning"
			],
			damage: "60×"
		}
	],
	suffix: "EX",
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
