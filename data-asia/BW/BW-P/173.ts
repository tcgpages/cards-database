import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "マルマイン"
	},
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 100,
	types: [
		"Lightning"
	],
	stage: "Stage1",
	dexId: [
		101
	],
	description: {
		ja: "電気エネルギーを ためすぎて ぱんぱんに 膨らんだ マルマインが 風に 流されてくることが ある。"
	},
	attacks: [
		{
			name: {
				ja: "エレキビーム"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Lightning"
			],
			damage: 20
		},
		{
			name: {
				ja: "じばく"
			},
			effect: {
				ja: "このポケモンにも100ダメージ。"
			},
			cost: [
				"Lightning",
				"Colorless",
				"Colorless"
			],
			damage: 100
		}
	],
	evolveFrom: {
		ja: "マルマインGX"
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
