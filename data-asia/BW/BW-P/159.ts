import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ゼクロムEX"
	},
	variants: [{ type: "holo" }],
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 180,
	types: [
		"Lightning"
	],
	stage: "Basic",
	dexId: [
		644
	],
	attacks: [
		{
			name: {
				ja: "かがやくツメ"
			},
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージを追加。"
			},
			cost: [
				"Lightning",
				"Colorless",
				"Colorless"
			],
			damage: "50+"
		},
		{
			name: {
				ja: "ストロングボルト"
			},
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。"
			},
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless"
			],
			damage: 150
		}
	],
	suffix: "EX",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 3
}

export default card
