import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ポカブ"
	},
	rarity: "Promo",
	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 70,
	types: [
		"Fire"
	],
	stage: "Basic",
	dexId: [
		498
	],
	description: {
		ja: "鼻の 穴から 炎を 吹く。 カゼを ひくと 炎ではなく 真っ黒な 煙に なってしまう。"
	},
	attacks: [
		{
			name: {
				ja: "ひのこ"
			},
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Fire",
				"Colorless"
			],
			damage: 30
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
