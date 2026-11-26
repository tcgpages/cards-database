import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ"
	},
	rarity: "Promo",
	illustrator: "Mizue",
	category: "Pokemon",
	hp: 60,
	types: [
		"Lightning"
	],
	stage: "Basic",
	dexId: [
		25
	],
	description: {
		ja: "弱った 仲間の ピカチュウに 電気を流し ショックを与えて 元気を 分けることも ある。"
	},
	attacks: [
		{
			name: {
				ja: "しっぽではたく"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		},
		{
			name: {
				ja: "でんきショック"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Lightning",
				"Colorless",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
