import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "メガレックウザEX"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: [
		"Colorless"
	],
	stage: "MEGA",
	suffix: "EX",
	abilities: [
		{
			name: {
				ja: "Δ（デルタ）進化"
			},
			effect: {
				ja: "このカードは、最初の自分の番や出したばかりのポケモンからでも、手札から進化できる。"
			},
			type: "Ancient Trait"
		}
	],
	attacks: [
		{
			name: {
				ja: "エメラルドブレイク"
			},
			effect: {
				ja: "自分のベンチポケモンの数×30ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "30×"
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
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
