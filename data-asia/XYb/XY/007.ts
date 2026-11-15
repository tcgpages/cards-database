import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "メガジュカインEX"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: [
		"Grass"
	],
	stage: "MEGA",
	suffix: "EX",
	abilities: [
		{
			name: {
				ja: "Θ（シータ）ストップ"
			},
			effect: {
				ja: "このポケモンは、相手のポケモンからの特性の効果を受けない。"
			},
			type: "Ancient Trait"
		}
	],
	attacks: [
		{
			name: {
				ja: "ジャギドセイバー"
			},
			effect: {
				ja: "のぞむなら、自分の手札から草エネルギーを2枚まで選び、ベンチポケモンに好きなようにつけてよい。その後、つけたポケモンのHPをすべて回復する。"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: 100
		}
	],
	weaknesses: [
		{
			type: "Fire",
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
