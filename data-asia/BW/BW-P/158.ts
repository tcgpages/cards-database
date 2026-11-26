import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "レシラムEX"
	},
	variants: [{ type: "holo" }],
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 180,
	types: [
		"Fire"
	],
	stage: "Basic",
	dexId: [
		643
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
				"Fire",
				"Colorless",
				"Colorless"
			],
			damage: "50+"
		},
		{
			name: {
				ja: "ブレイブファイヤー"
			},
			effect: {
				ja: "コインを1回投げウラなら、このポケモンにも50ダメージ。"
			},
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless"
			],
			damage: 150
		}
	],
	suffix: "EX",
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 3
}

export default card
