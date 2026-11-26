import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "デオキシスex",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Hiromichi Sugiyama",
	hp: 110,
	types: [
		"Psychic",
	],
	stage: "Basic",
	suffix: "ex",
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
				ja: "このパワーは、自分の番に1回使うことができる。自分の山札から「デオキシスex」を1枚選び出し、このポケモンと入れ替える（ついているカード、ダメージカウンター、受けている特殊状態・効果などは、すべてそのままで、このポケモンは、入れ替えたカードのポケモンになる）。その後、このカードを自分の山札にもどし、その山札を切る。「フォルムチェンジ」は、自分の番の中で1回だけ。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "スピードウェーブ",
			},
			effect: {
				ja: "このワザは、相手の抵抗力・すべての効果に関係なく、ダメージを与える。",
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			damage: 50,
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
