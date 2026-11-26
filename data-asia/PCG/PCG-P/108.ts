import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "メタモン",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Yuka Morii",
	hp: 60,
	types: [
		"Psychic",
	],
	stage: "Basic",
	dexId: [
		132,
	],
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				ja: "メタモる",
			},
			effect: {
				ja: "このパワーは、自分の番に1回使うことができる。自分の山札から「メタモン」を1枚選び出し、このポケモンと入れ替える（ついているカード、ダメージカウンター、受けている特殊状態・効果などは、すべてそのままで、このポケモンは、入れ替えたカードのポケモンになる）。その後、このカードを自分の山札にもどし、その山札を切る。「メタモる」は、自分の番の中で1回だけ。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "サイケこうせん",
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手をこんらんにする。",
			},
			cost: [
				"Psychic",
				"Colorless",
			],
			damage: 20,
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
