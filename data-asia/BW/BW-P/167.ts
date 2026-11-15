import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "コダック"
	},
	rarity: "Promo",
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 70,
	types: [
		"Water"
	],
	stage: "Basic",
	dexId: [
		54
	],
	description: {
		ja: "頭痛で 普段 眠っている 脳細胞が 刺激 されると 不思議な 力が 使える。"
	},
	attacks: [
		{
			name: {
				ja: "しょうか"
			},
			effect: {
				ja: "相手のバトルポケモンについている[炎]エネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Water"
			]
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 3
}

export default card
