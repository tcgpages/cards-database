import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "メロエッタ"
	},
	rarity: "Promo",
	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 80,
	types: [
		"Fighting"
	],
	stage: "Basic",
	dexId: [
		648
	],
	description: {
		ja: "メロエッタの 奏でる メロディに インスピレーションを 受けて 作られた 名曲は 多い。"
	},
	attacks: [
		{
			name: {
				ja: "ひらてうち"
			},
			cost: [
				"Fighting"
			],
			damage: 10
		},
		{
			name: {
				ja: "アクロバット"
			},
			effect: {
				ja: "コインを2回投げ、オモテの数×20ダメージを追加。"
			},
			cost: [
				"Fighting",
				"Colorless",
				"Colorless"
			],
			damage: "40+"
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
