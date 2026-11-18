import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "スコルピ"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		451
	],
	description: {
		ja: "砂の 中に 隠れて 獲物を 待ち伏せする。 尻尾の ツメから 毒を 出して 獲物を しとめる。"
	},
	attacks: [
		{
			name: {
				ja: "ミサイルばり"
			},
			effect: {
				ja: "コインを4回投げ、オモテの数×10ダメージ。"
			},
			cost: [
				"Psychic",
				"Colorless"
			],
			damage: "10×"
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
