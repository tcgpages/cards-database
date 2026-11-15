import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ホウオウEX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 180,
	types: [
		"Colorless"
	],
	stage: "Basic",
	suffix: "EX",
	abilities: [
		{
			name: {
				ja: "じょうかのほのお"
			},
			effect: {
				ja: "この特性は、このポケモンに基本炎エネルギーがついているなら、自分の番に1回使える。このポケモンのHPを「50」回復する。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "エレメンタルフェザー"
			},
			effect: {
				ja: "相手のベンチポケモンを1匹選び、そのポケモンにも30ダメージ。［ベンチは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Grass",
				"Water",
				"Lightning"
			],
			damage: 130
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
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
