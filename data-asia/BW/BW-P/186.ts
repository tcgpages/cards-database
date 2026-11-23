import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "サンダース"
	},
	rarity: "Promo",
	illustrator: "The Pokémon Company Art-team",
	category: "Pokemon",
	hp: 90,
	types: [
		"Lightning"
	],
	stage: "Stage1",
	dexId: [
		135
	],
	description: {
		ja: "感情が たかぶると 電気を 帯びて 真っ直ぐになった 体毛を 何本も 飛ばす。"
	},
	attacks: [
		{
			name: {
				ja: "エレキガン"
			},
			effect: {
				ja: "のぞむなら、このポケモンについている[雷]エネルギーを1個選び、トラッシュしてよい。その場合、40ダメージを追加。"
			},
			cost: [
				"Colorless"
			],
			damage: "20+"
		},
		{
			name: {
				ja: "ミサイルばり"
			},
			effect: {
				ja: "コインを4回投げ、オモテの数×40ダメージ。"
			},
			cost: [
				"Lightning",
				"Colorless",
				"Colorless"
			],
			damage: "40×"
		}
	],
	evolveFrom: {
		ja: "イーブイ"
	},
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 0
}

export default card
