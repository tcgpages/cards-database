import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "マギアナ"
	},
	illustrator: "Megumi Mizutani",
	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: [
		"Metal"
	],
	dexId: [
		801
	],
	stage: "Basic",
	description: {
		ja: "金属質の 体の マギアナは ５００年前に 人の手によって 生み出された 人造ポケモンだ。"
	},
	attacks: [
		{
			name: {
				ja: "もてなす"
			},
			effect: {
				ja: "自分のベンチポケモンを1匹選び、HPを「40」回復する。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "プリズムウェーブ"
			},
			effect: {
				ja: "相手のベンチポケモンのタイプの数×20ダメージ。"
			},
			cost: [
				"Metal"
			],
			damage: "20×"
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
	retreat: 1,
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
			foil: "mirror"
		}
	]
}

export default card
