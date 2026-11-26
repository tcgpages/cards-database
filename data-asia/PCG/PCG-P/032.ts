import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "デオキシス",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Hironobu Yoshida",
	hp: 70,
	types: [
		"Psychic",
	],
	stage: "Basic",
	dexId: [
		386,
	],
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				ja: "フォルムチェンジ",
			},
			effect: {
				ja: "このパワーは、自分の番に1回使うことができる。自分の山札から「デオキシス」を1枚選び出し、このポケモンと入れ替える(ついてあるカード、ダメージカウンター、受けている特殊状態・効果などは、すべてそのままで、このポケモンは、入れ替えたカードのポケモンになる)。その後、このカードを自分の山札にもどし、その山札を切る。「フォルムチェンジ」は、自分の番の中で1回だけ。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "スピードスター",
			},
			effect: {
				ja: "このワザは、相手の弱点・抵抗力・すべての効果に関係なく、ダメージを与える。",
			},
			cost: [
				"Colorless",
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
			stamp: [
				"mcdonalds",
			],
		},
	],
}

export default card
