import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "メガハッサムEX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: [
		"Metal"
	],
	stage: "MEGA",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "アイアンクラッシャー"
			},
			effect: {
				ja: "のぞむなら、相手のバトルポケモンについている特殊エネルギーを1個、または場に出ているスタジアムのどちらかを選び、トラッシュしてよい。"
			},
			cost: [
				"Metal",
				"Metal"
			],
			damage: 120
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
