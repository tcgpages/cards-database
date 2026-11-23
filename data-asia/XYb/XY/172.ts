import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "メガバクーダEX"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 230,
	types: [
		"Fire"
	],
	dexId: [
		323
	],
	evolveFrom: {
		ja: "バクーダEX"
	},
	stage: "MEGA",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "マグマイラプション"
			},
			effect: {
				ja: "のぞむなら、おたがいの山札を上から3枚ずつトラッシュしてよい。その場合、そのトラッシュした中にあるエネルギーの枚数×40ダメージを追加。"
			},
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless"
			],
			damage: "120+"
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 4,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
