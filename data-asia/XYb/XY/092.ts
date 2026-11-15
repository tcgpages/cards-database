import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "メガサーナイトEX"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: [
		"Fairy",
		"Psychic"
	],
	stage: "MEGA",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "ディスペアーレイ"
			},
			effect: {
				ja: "自分のベンチポケモンを好きなだけトラッシュし、トラッシュしたベンチポケモンの数×10ダメージを追加。"
			},
			cost: [
				"Fairy",
				"Colorless"
			],
			damage: "110+"
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Darkness",
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
