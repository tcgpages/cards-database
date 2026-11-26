import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "チョロネコ"
	},
	rarity: "Promo",
	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 60,
	types: [
		"Darkness"
	],
	stage: "Basic",
	dexId: [
		509
	],
	description: {
		ja: "人の 物を 遊びで 盗む。 盗まれた 人も 愛くるしい 仕草に つい 許してしまうのだ。"
	},
	attacks: [
		{
			name: {
				ja: "おどしとる"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手の手札からオモテを見ないで1枚選び、トラッシュする。"
			},
			cost: [
				"Darkness",
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		}
	],
	retreat: 1
}

export default card
