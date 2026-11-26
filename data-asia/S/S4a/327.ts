import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ムゲンダイナV"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 220,
	types: [
		"Darkness"
	],
	dexId: [
		890
	],
	stage: "Basic",
	suffix: "V",
	attacks: [
		{
			name: {
				ja: "パワーアクセル"
			},
			effect: {
				ja: "のぞむなら、自分の手札から悪エネルギーを1枚選び、ベンチポケモンにつける。"
			},
			cost: [
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "ダイマックスほう"
			},
			effect: {
				ja: "相手のバトルポケモンが「ポケモンVMAX」なら、120ダメージ追加。"
			},
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "120+"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 2,
	regulationMark: "D",
	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
