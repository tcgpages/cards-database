import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ウルガモス"
	},
	variants: [{ type: "holo" }],
	rarity: "Promo",
	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 110,
	types: [
		"Fire"
	],
	stage: "Stage1",
	dexId: [
		637
	],
	description: {
		ja: "戦いになると ６枚の ハネから 火の粉の りんぷんを まき散らして あたり 一面を 火の海にする。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "やけつくりんぷん"
			},
			effect: {
				ja: "このポケモンがいるかぎり、相手のやけどのポケモンは、ポケモンチェックのときにのせるやけどのダメカンの数が4個になる。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "ヒートウインド"
			},
			effect: {
				ja: "のぞむなら、このポケモンについているエネルギーを1個選び、トラッシュしてよい。その場合、相手のバトルポケモンをやけどにする。"
			},
			cost: [
				"Fire",
				"Colorless",
				"Colorless"
			],
			damage: 70
		}
	],
	evolveFrom: {
		ja: "メラルバ"
	},
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 3
}

export default card
