import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "エモンガ"
	},
	variants: [{ type: "reverse" }],
	rarity: "Promo",
	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 70,
	types: [
		"Lightning"
	],
	stage: "Basic",
	dexId: [
		587
	],
	description: {
		ja: "ほほの 電気袋で 作った 電気を 膜の 内側に ためて 滑空しながら 電気を 放つ。"
	},
	attacks: [
		{
			name: {
				ja: "でんきショック"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Lightning"
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
				"Colorless",
				"Colorless"
			],
			damage: "10+"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 0
}

export default card
