import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "サメハダーEX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "None",
	category: "Pokemon",
	hp: 170,
	types: [
		"Darkness"
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "つけねらう"
			},
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに30ダメージ。"
			},
			cost: [
				"Darkness",
				"Colorless"
			]
		},
		{
			name: {
				ja: "ギザギザファング"
			},
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。その後、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Darkness",
				"Darkness",
				"Colorless"
			],
			damage: 100
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
