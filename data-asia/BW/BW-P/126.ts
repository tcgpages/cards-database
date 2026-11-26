import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "リグレー"
	},
	rarity: "Promo",
	illustrator: "Mizue",
	category: "Pokemon",
	hp: 60,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		605
	],
	description: {
		ja: "強力な サイコパワーを 操る。 サイコパワーで 相手の 脳みそを 絞めつけて 頭痛を 起こさせる。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ウィークバリア"
			},
			effect: {
				ja: "このポケモンに[超]エネルギーがついているなら、このポケモンの弱点はなくなる。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "クイックアタック"
			},
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージを追加。"
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
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
