import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "トルネロスEX"
	},
	variants: [{ type: "holo" }],
	rarity: "Promo",
	illustrator: "Ryo Ueda",
	category: "Pokemon",
	hp: 170,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		641
	],
	attacks: [
		{
			name: {
				ja: "ふきぬける"
			},
			effect: {
				ja: "場に「スタジアム」が出ているなら、30ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "30+"
		},
		{
			name: {
				ja: "パワーブラスト"
			},
			effect: {
				ja: "コインを1回投げウラなら、このポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 100
		}
	],
	suffix: "EX",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],
	retreat: 1
}

export default card
