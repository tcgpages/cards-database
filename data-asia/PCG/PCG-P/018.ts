import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "裂空のデオキシス",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "K. Hoshiba",
	hp: 80,
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
				ja: "このパワーは、自分の番に1回使うことができる。自分の山札から「裂空のデオキシス」を1枚選び出し、このポケモンと入れ替える（ついているカード、ダメージカウンター、受けている特殊状態・効果などは、すべてそのままで、このポケモンは、入れ替えたカードのポケモンになる）。その後、このカードを自分の山札にもどし、その山札を切る。「フォルムチェンジ」は、自分の番の中で1回だけ。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "オゾンドレイン",
			},
			effect: {
				ja: "場に「磁気嵐」があるなら、自分のダメージカウンターを3個とりのぞく。",
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			damage: 40,
		},
	],
	weaknesses: [
		{
			type: "Psychic",
		},
	],
	retreat: 2,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
