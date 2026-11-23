import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "メレシーBREAK"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: [
		"Fighting"
	],
	dexId: [
		703
	],
	evolveFrom: {
		ja: "メレシー"
	},
	stage: "BREAK",
	attacks: [
		{
			name: {
				ja: "ダイヤモンドギフト"
			},
			effect: {
				ja: "自分のトラッシュからエネルギーを2枚選び、自分の闘ポケモン1匹につける。"
			},
			cost: [
				"Fighting"
			],
			damage: 20
		}
	],
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
