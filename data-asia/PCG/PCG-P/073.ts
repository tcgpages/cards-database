import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ピジョット",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Ken Sugimori",
	hp: 80,
	types: [
		"Colorless",
	],
	stage: "Stage2",
	evolveFrom: {
		ja: "ピジョン",
	},
	dexId: [
		18,
	],
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				ja: "おおきくはばたく",
			},
			effect: {
				ja: "このパワーは、このポケモンがバトル場にいるなら、自分の番に1回使うことができる。自分のベンチポケモンを1匹選び、そのポケモンと、そのポケモンについているすべてのカードを、自分の山札にもどす。その後、その山札を切る。このポケモンが特殊状態なら、このパワーを使うことはできない。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "するどいくちばし",
			},
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージを追加する。",
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			damage: "20+",
		},
	],
	weaknesses: [
		{
			type: "Lightning",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 0,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
