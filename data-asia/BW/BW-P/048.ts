import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ダルマッカ"
	},
	rarity: "Promo",
	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 60,
	types: [
		"Fire"
	],
	stage: "Basic",
	dexId: [
		554
	],
	description: {
		ja: "体内で 炎が 燃えていると 落ち着かなく 走り回っている。 炎が 小さくなると 眠る。"
	},
	attacks: [
		{
			name: {
				ja: "やきこがす"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをやけどにする。"
			},
			cost: [
				"Fire",
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 2
}

export default card
