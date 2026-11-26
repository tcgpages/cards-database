import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "セレビィex",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Ryo Ueda",
	hp: 80,
	types: [
		"Psychic",
	],
	stage: "Basic",
	suffix: "ex",
	dexId: [
		251,
	],
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				ja: "タイムリバース",
			},
			effect: {
				ja: "このパワーは、自分の番に、このカードを手札からベンチに出したとき、1回使うことができる。自分のトラッシュからカードを1枚選び出し、相手プレイヤーに見せてから、自分の山札の上にもどす。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "サイコシールド",
			},
			effect: {
				ja: "次の相手の番、このカードは、相手のポケモンexのワザによるダメージや効果を受けない。",
			},
			cost: [
				"Psychic",
				"Colorless",
			],
			damage: 30,
		},
	],
	weaknesses: [
		{
			type: "Psychic",
		},
	],
	retreat: 1,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
