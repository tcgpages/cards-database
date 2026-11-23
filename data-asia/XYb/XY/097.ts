import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ゼルネアスBREAK"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 150,
	types: [
		"Fairy"
	],
	dexId: [
		716
	],
	evolveFrom: {
		ja: "ゼルネアス"
	},
	stage: "BREAK",
	attacks: [
		{
			name: {
				ja: "ライフストリーム"
			},
			effect: {
				ja: "自分の場のポケモンについているエネルギーの合計×20ダメージ。"
			},
			cost: [
				"Fairy",
				"Fairy"
			],
			damage: "20×"
		}
	],
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
