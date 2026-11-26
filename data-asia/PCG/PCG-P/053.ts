import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "R団のペルシアンex",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Mitsuhiro Arita",
	hp: 100,
	types: [
		"Darkness",
	],
	stage: "Stage1",
	suffix: "ex",
	evolveFrom: {
		ja: "R団のニャース",
	},
	dexId: [
		53,
	],
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				ja: "ダークコール",
			},
			effect: {
				ja: "このパワーは、このポケモンがベンチにいるなら、自分の番に1回使うことができる。自分の山札から、「わるいポケモン」または「R団のポケモン」を1枚選び出し、相手プレイヤーに見せてから、手札に加える。その後、その山札を切る。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "どくどくのつめ",
			},
			effect: {
				ja: "相手をどくにする。このワザでどくになったポケモンは、ポケモンチェックのときにのせるどくのダメージカウンターの数が2個になる。",
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			damage: 20,
		},
	],
	weaknesses: [
		{
			type: "Fighting",
		},
	],
	retreat: 1,
	variants: [
		{
			type: "holo",
		},
	],
}

export default card
