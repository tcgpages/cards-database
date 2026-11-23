import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "フーパEX"
	},
	illustrator: "Ryota Murayama",
	rarity: "None",
	category: "Pokemon",
	hp: 170,
	types: [
		"Psychic"
	],
	dexId: [
		720
	],
	stage: "Basic",
	suffix: "EX",
	abilities: [
		{
			name: {
				ja: "バンデットリング"
			},
			effect: {
				ja: "この特性は、このカードを手札からベンチに出したとき、1回使える。自分の山札から「ポケモンEX」（「フーパEX」をのぞく）を3枚まで選び、相手に見せてから、手札に加える。そして山札を切る。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "いじげんラッシュ"
			},
			effect: {
				ja: "このポケモンについているエネルギーを2個トラッシュし、相手のポケモン1匹に、100ダメージ。［ベンチは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Psychic",
				"Psychic",
				"Psychic"
			]
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
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
